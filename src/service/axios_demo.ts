import axios from "axios";

axios.get("http://123.207.32.32:8000/home/multidata").then((res) => {
  console.log(res.data);
});

// axios
//   .post("http://httpbin.org/post", {
//     data: {
//       name: "r-c-m",
//       age: 19
//     },
//     "Content-Type": "application/json"
//   })
//   .then((res) => {
//     console.log(res);
//   });

// axios
//   .put("http://httpbin.org/put", {
//     data: {
//       address: "武汉商务区",
//       date: "2022-02-17"
//     }
//   })
//   .then((res) => {
//     console.log(res.data.json);
//   });

axios.defaults.baseURL = "http://httpbin.org/";

// axios
//   .post("post", {
//     data: {
//       name: "r-c-m",
//       age: 19
//     },
//     "Content-Type": "application/json"
//   })
//   .then((res) => {
//     console.log(res);
//   });

// axios
//   .put("put", {
//     data: {
//       address: "武汉商务区1111",
//       date: "2022-02-17"
//     }
//   })
//   .then((res) => {
//     console.log(res.data.json);
//   });

axios
  .all([
    axios.get("get", {
      params: {
        name: "小猪佩奇",
        age: 3000
      }
    }),
    axios.put("put", {
      data: {
        name: "乔治",
        age: 2995
      }
    })
  ])
  .then((res) => {
    console.log(res[0].data.args);
    console.log(res[1].data.json.data);
  });
