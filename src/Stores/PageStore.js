import { types, flow } from "mobx-state-tree";
import axios from "axios";

const Store = types
  .model({
    formDataList: types.array(types.frozen()),
    state: types.enumeration("State", ["pending", "done", "error"])
  })
  .actions((self) => ({
    fetchProjects: flow(function* fetchProjects() {
      // <- note the star, this a generator function!
      self.formDataList = [1, 2, 3];
      self.state = "pending";
      try {
        // ... yield can be used in async/await style
        const response = yield axios({
          url: `https://jsonplaceholder.typicode.com/posts?userId=1`,
          method: "GET"
        });
        if (response.status !== 200) {
          throw new Error(JSON.stringify(response));
        }
        if (response && response.data) {
          console.log({ response });
          self.formDataList = response.data;
        }

        self.state = "done";
      } catch (error) {
        // ... including try/catch error handling
        console.error("Failed to fetch projects", error);
        self.state = "error";
      }
    })
  }));

export const store = Store.create({ formDataList: [], state: "done" });
