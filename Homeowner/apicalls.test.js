import { patchUserChoice, patchHomeowner, postProject, postUser, getHomeownerProjects } from './apicalls';

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

})