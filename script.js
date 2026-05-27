const button = document.querySelector("#btn");
const input = document.querySelector("#ip");
const output = document.querySelector("#output");
let data;

const promise1 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("entered set timeout");
      data = input.value;
      output.innerHTML += `Result: ${data}`;
      resolve("promise1 resolved");
    }, 2000);
  });
};

const promise2 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      data = data * 2;
      output.innerHTML = `Result: ${data}`;
      resolve("promise2 resolved");
    }, 1000);
  });
};

const promise3 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      data = data - 3;
      output.innerHTML = `Result: ${data}`;
      resolve("promise3 resolved");
    }, 1000);
  });
};

const promise4 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      data /= 2;
      output.innerHTML = `Result: ${data}`;
      resolve("promise4 resolved");
    }, 1000);
  });
};

const promise5 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      data += 10;
      output.innerHTML = `Final Result: ${data}`;
      resolve("promise5 resolved");
    }, 1000);
  });
};

const chaining = () => {
  return new Promise((resolve, reject) => {
    promise1()
      .then((data1) => {
        console.log("step1 done", data1);
        return promise2();
      })
      .then((data2) => {
        console.log("step2 done", data2);
        return promise3();
      })
      .then((data3) => {
        console.log("step3 done", data3);
        return promise4();
      })
      .then((data4) => {
        console.log("step4 done", data4);
        return promise5();
      })
      .then((data5) => {
        console.log("step5 done", data5);
      });
  });
};

button.addEventListener("click", chaining);
