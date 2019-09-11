import { patchHomeowner, postProject, postUser, getHomeownerProjects } from './apicalls';
import { clearUpdateCacheExperimentalAsync } from 'expo/build/Updates/Updates';

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
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockResponse)
        })
      })
    })
  
    it('should fetch projects given the correct url', async () => {
      const url = 'https://fixup-backend.herokuapp.com/api/v1/users/1/projects'
      getHomeownerProjects(1);
      expect(wndow.fetch).toHaveBeenCalledWith(url)
    })

    it('should return an a parsed response if ok', () => {
      expect(getHomeownerProjects(1)).resolves.toEqual(mockResponse)
    })

    it('should throw an error if response is not ok', () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: false
        });
      });
      expect(getCharacters()).resolves.toBe.a(String);
    })

  })
})