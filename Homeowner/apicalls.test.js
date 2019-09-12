import { patchUserChoice, patchHomeowner, postProject, postUser, getHomeownerProjects, getHomeowner } from './apicalls';
import { patchContractor, patchContractorProject, postContractor, patchContractorProjectSeen, getContractor, getContractorProjects, getProjectBatch } from '../contractorApiCalls';

describe('apicalls', () => {

  describe('getHomeownerProjects', () => {
    let mockResponse;

    beforeEach(() => {
      mockResponse = [
        {
          title: "Broken Pipe",
          description: "A pipe in my bathroom is leaky",
          category: "plumbing",
          user_before_picture: "brokenpipe.png",
          user_after_picture: null
        }
      ]
      global.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockResponse)
        })
      })
    })
  
    it('should fetch projects given the correct url', async () => {
      const url = 'https://fixup-backend.herokuapp.com/api/v1/users/1/projects'
      getHomeownerProjects(1);
      expect(global.fetch).toHaveBeenCalledWith(url)
    })

    it('should return an a parsed response if ok', () => {
      expect(getHomeownerProjects(1)).resolves.toEqual(mockResponse)
    })

    it('should throw an error if response is not ok', () => {
      global.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: false
        });
      });
      expect(getHomeownerProjects()).resolves.toBe(String);
    })

  })

  describe('patchHomeowner', () => {
    let updatedHomeowner;
    let id;

    beforeEach(() => {
      id = 1
      updatedHomeowner = {}
      mockResponse = {}
      global.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockResponse)
        })
      })
    })

    it('should patch project given the correct url', async () => {
      const options = {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedHomeowner)
      };
      const url = `https://fixup-backend.herokuapp.com/api/v1/users/1`;
      await patchHomeowner(updatedHomeowner, id);
      expect(global.fetch).toHaveBeenCalledWith(url, options)
    })

    it('should return a parsed response if status is ok', async () => {

    })

    it('should throw an error if response is not ok', () => {
      global.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: false
        });
      });
      expect(patchHomeowner()).resolves.toBe(String);
    })

  })

  describe('postProject', () => {
    let mockResponse;
    let newProject;

    beforeEach(() => {
      newProject = {
        title: "newly uploaded project",
        description: "this is the third project",
        category: "plumbing",
        user_before_picture: "picture.png"
      }
      mockResponse = {
        user_id: 1,
        project: {
          title: "newly uploaded project",
          description: "this is the third project",
          picture: "picture.png"
        }
      }
      global.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockResponse)
        })
      })
    })

    it('should fetch given the correct url', async () => {
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newProject)
      }
      const url = 'https://fixup-backend.herokuapp.com/api/v1/users/1/projects';
      await postProject(newProject);
      expect(global.fetch).toHaveBeenCalledWith(url, options);
    });

    it('should return a parsed response if status is ok', async () => {
      expect(postProject(newProject)).resolves.toEqual(mockResponse)
    })

    it('should throw an error if response is not ok', () => {
      global.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: false
        });
      });
      expect(postProject()).resolves.toBe(String);
    })

  })

  describe('postUser', () => {
    let mockResponse;
    let newHomeowner;

    beforeEach(() => {
      newHomeowner = {
        full_name: "Princess",
        email: "another_castle@mail.com",
        phone_number: "3035555555",
        zip: "80555"
      }
      mockResponse = {
        id: 1,
        full_name: "Princess",
        email: "another_castle@mail.com",
        phone_number: "3035555555",
        zip: "80555"
      } 
      global.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockResponse)
        })
      })
    })

    it('should fetch given the correct url', async () => {
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newHomeowner)
      };
      const url = "https://fixup-backend.herokuapp.com/api/v1/users/";
      await postUser(newHomeowner);
      expect(global.fetch).toHaveBeenCalledWith(url, options)
    })
    
    it('should return a parsed response if status is ok', () => {
      expect(postUser(newHomeowner)).resolves.toEqual(mockResponse)
    });

    it('should throw an error if response is not ok', () => {
      global.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: false
        });
      });
      expect(postUser()).resolves.toBe(String);
    })
    
  });

  describe('patchUserChoice', () => {
    let mockResponse;
    let projectId;
    let contractorId;

    beforeEach(() => {
      projectId = 1
      contractorId = 1
      mockResponse = {
        message: "You've been Fixed Up!",
        contractor: {
          name: "Plumbing Person",
          email: "plumbing@gmail.com",
          phone_number: "7205555555",
          zip: "80555",
          category: "plumbing",
          logo: "plumbinglogo.png"
        },
        project: {
          title: "Broken Pipe",
          description: "A pipe in my bathroom is leaky",
          category: "plumbing",
          user_before_picture: "brokenpipe.png",
          user_after_picture: null
        },
        user: {
          full_name: "Mario Mario",
          email: "jumpman@gmail.com",
          phone_number: "3035555555",
          zip: "80555"
        }
      }

      global.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockResponse)
        })
      })
    })

    it('should fetch given the correct url', () => {
      const url = `https://fixup-backend.herokuapp.com/api/v1/projects/${projectId}/contractors/${contractorId}`;
      const options = {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          user_choice: "True"
        })
      };
      patchUserChoice(projectId, contractorId)
      expect(global.fetch).toHaveBeenCalledWith(url, options)
    })

    it('should return a parsed response if status is ok', () => {
      expect(patchUserChoice(projectId, contractorId)).resolves.toEqual(mockResponse);
    })

    it('should throw an error if response is not ok', () => {
      global.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: false
        });
      });
      expect(patchUserChoice()).resolves.toBe(String);
    })
  })

  describe('getHomeowner', () => {
    let mockResponse;
    let id;
    
    beforeEach(() => {
      id = 1
      mockResponse = {
        full_name: "Mario Mario",
        email: "jumpman@gmail.com",
        phone_number: "3035555555",
        zip: "80555"
      }
      global.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockResponse)
        })
      })
    })

    it('should fetch given the correct url', async () => {
      const url = `https://fixup-backend.herokuapp.com/api/v1/users/${id}`;
      getHomeowner(id);
      expect(global.fetch).toHaveBeenCalledWith(url);
    })

    it('should return a parsed response of status is ok', () => {
      expect(getHomeowner(id)).resolves.toEqual(mockResponse)
    })

    it('should throw an error if response is not ok', () => {
      global.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: false
        });
      });
      expect(getHomeowner(id)).resolves.toBe(String);
    })

  });

  describe('patchContractor', () => {
    let mockResponse;
    let updateContractor;
    let id;

    beforeEach(() => {
      id = 1;
      updateContractor = {
        name: "new_name_1",
        email: "new_plumbing@gmail.com",
        phone_number: "7205555555",
        zip: "80555",
        category: "plumbing",
        logo: "plumbinglogo.png"
      }
      mockResponse = {
        name: "new_name_1",
        email: "new_plumbing@gmail.com",
        phone_number: "7205555555",
        zip: "80555",
        category: "plumbing",
        logo: "plumbinglogo.png"
      }
      global.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockResponse)
        })
      })
    })

    it('should fetch when given the correct url', async () => {
      const url = `https://fixup-backend.herokuapp.com/api/v1/contractors/${id}`;
      const options = {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(updateContractor)
      };
      patchContractor(updateContractor, id);
      expect(global.fetch).toHaveBeenCalledWith(url, options)
    })

    it('should return a parsed response if status is ok', async () => {
      await expect(patchContractor(updateContractor, id)).resolves.toEqual(mockResponse)
    });

    it('should throw an error if response is not ok', () => {
      global.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: false
        });
      });
      expect(patchContractor(updateContractor, id)).resolves.toBe(String);
    });

  });

  describe('postContractor', () => {
    let mockResponse;
    let newContractor;

    beforeEach(() => {
      newContractor = {
        name: "Builder Bob",
        email: "test@mail.com",
        phone_number: "111111111",
        zip: "80124",
        category: "construction",
        logo: "logo.jpg"
      }
      mockResponse = {
        name: "Builder Bob",
        email: "test@mail.com",
        phone_number: "111111111",
        zip: "80124",
        category: "construction",
        logo: "logo.jpg"
      }
      global.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockResponse)
        })
      })
    })

    it('should fetch given the correct data', async () => {
      const url = "https://fixup-backend.herokuapp.com/api/v1/contractors/";
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newContractor)
      };
      await postContractor(newContractor);
      expect(global.fetch).toHaveBeenCalledWith(url, options);
    })

    it('should return a parsed response if status is ok', () => {
      expect(postContractor(newContractor)).resolves.toEqual(mockResponse);
    })

    it('should throw an error if response is not ok', () => {
      global.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: false
        });
      });
      expect(postContractor(newContractor)).resolves.toBe(String);
    });

  });

  describe('getContractorProjects', () => {
    let id;
    let mockResponse;

    beforeEach(() => {
      id = 1;
      mockResponse = [
        {
          "title": "Broken Pipe",
          "description": "A pipe in my bathroom is leaky",
          "category": "plumbing",
          "user_before_picture": "brokenpipe.png",
          "user_after_picture": null
        }
      ]
      global.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockResponse)
        })
      })
    })

    it('should fetch given the correct url', async () => {
      const url = `https://fixup-backend.herokuapp.com/api/v1/contractors/${id}/projects`;
      await getContractorProjects(id);
      expect(global.fetch).toHaveBeenCalledWith(url);
    })

    it('should return a parsed response if status is ok', async () => {
      await expect(getContractorProjects(id)).resolves.toEqual(mockResponse);
    })

    it('should throw an error if response is not ok', () => {
      global.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: false
        });
      });
      expect(getContractorProjects(id)).resolves.toBe(String);
    });

  });

  describe('getProjectBatch', () => {
    let mockResponse;
    let id;
    let suggestedQuery;

    beforeEach(() => {
      mockResponse = [
        {
          "title": "Broken Pipe",
          "description": "A pipe in my bathroom is leaky",
          "category": "plumbing",
          "user_before_picture": "brokenpipe.png",
          "user_after_picture": null
        }
      ]
      suggestedQuery = "&limit=5";
      id = 1;
      global.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockResponse)
        })
      })
    })

    it('should fetch given the correct url', async () => {
      url = `https://fixup-backend.herokuapp.com/api/v1/projects?contractor_id=${id}${suggestedQuery}`;
      await getProjectBatch(id, suggestedQuery);
      expect(global.fetch).toHaveBeenCalledWith(url);
    })

    it('should return a parsed response if status is ok', async () => {
      await expect(getProjectBatch(id, suggestedQuery)).resolves.toEqual(mockResponse);
    });

    it('should throw an error if response is not ok', () => {
      global.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: false
        });
      });
      expect(getProjectBatch(id, suggestedQuery)).resolves.toBe(String);
    });

  })

  describe('patchContractorProject', () => {
    let mockResponse;
    let contractorId;
    let projectId;
    let choice;

    beforeEach(() => {
      mockResponse = {
        "message": "contractor_project contractor_choice updated to 2"
      };
      contractorId = 1;
      projectId = 1;
      choice = 2
      global.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockResponse)
        })
      })
    })

    it('should fetch given the correct url', async () => {
      const url = `https://fixup-backend.herokuapp.com/api/v1/contractors/${contractorId}/projects/${projectId}`;
      const options = {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ contractor_choice: choice })
      };
      await patchContractorProject(contractorId, projectId, choice);
      expect(global.fetch).toHaveBeenCalledWith(url, options);
    });

    it('should return a parsed response if status is ok', () => {
      expect(patchContractorProject(contractorId, projectId, choice)).resolves.toEqual(mockResponse);
    });

    it('should throw an error if response is not ok', () => {
      global.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: false
        });
      });
      expect(patchContractorProject(contractorId, projectId, choice)).resolves.toBe(String);
    });

  });

  describe('getContractor', () => {
    let mockResponse;
    let id;

    beforeEach(() => {
      id = 1
      mockResponse = {
        "name": "new_name_1",
        "email": "new_plumbing@gmail.com",
        "phone_number": "7205555555",
        "zip": "80555",
        "category": "plumbing",
        "logo": "plumbinglogo.png"
      }
      global.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockResponse)
        })
      })
    })

    it('should fetch given the correct url', async () => {
      const url = `https://fixup-backend.herokuapp.com/api/v1/contractors/${id}`;
      await getContractor(id);
      expect(global.fetch).toHaveBeenCalledWith(url);
    })

    it('should return a parsed response if status is ok', async () => {
      await expect(getContractor(id)).resolves.toEqual(mockResponse);
    });

    it('should throw an error if response is not ok', () => {
      global.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: false
        });
      });
      expect(getContractor(id)).resolves.toBe(String);
    });

  });

  describe('patchContractorProjectSeen', () => {
    let mockResponse;
    let contractorId;
    let projectId;

    beforeEach(() => {
      contractorId = 1;
      projectId = 1;
      mockResponse = {
        "message": "Contractor's project marked as 'seen'"
      }
      global.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockResponse)
        })
      })
    })

    it('should fetch given the correct url', async () => {
      const url = `https://fixup-backend.herokuapp.com/api/v1/contractors/${contractorId}/projects/${projectId}`;
      const options = {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ seen: "True" })
      };
      await patchContractorProjectSeen(contractorId, projectId);
      expect(global.fetch).toHaveBeenCalledWith(url, options);
    });

    it('should return a parsed response if status is ok', async () => {
      await expect(patchContractorProjectSeen(contractorId, projectId)).resolves.toEqual(mockResponse);
    });

    it('should throw an error if response is not ok', () => {
      global.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: false
        });
      });
      expect(patchContractorProjectSeen(contractorId, projectId)).resolves.toBe(String);
    });

  })

})