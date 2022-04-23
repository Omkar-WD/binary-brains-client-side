import { API } from "../../components/Variables";
import axios from "axios";

// action type
export const IS_LOGIN = "IS_LOGIN";

// action-creator
export const isLogin = (obj) => ({ type: IS_LOGIN, payload: obj });

export const getLogin = (data, toast) => (dispatch) => {
  axios
    .post(`${API}/login`, data)
    .then((res) => {
      console.log(res.data);
      localStorage.setItem(
        "loginUser",
        JSON.stringify({
          user: {
            _id: res.data.user._id,
            first_name: res.data.user.first_name,
            last_name: res.data.user.last_name,
            mobile: res.data.user.mobile,
            email: res.data.user.email,
            DOB: res.data.user.DOB,
            Gender: res.data.user.Gender,
            password: res.data.user.password,
            userType: res.data.user.userType,
            batch_id: res.data.user.batch_id,
          },
        })
      );
      dispatch(
        isLogin({
          user: {
            _id: res.data.user._id,
            first_name: res.data.user.first_name,
            last_name: res.data.user.last_name,
            mobile: res.data.user.mobile,
            email: res.data.user.email,
            DOB: res.data.user.DOB,
            Gender: res.data.user.Gender,
            password: res.data.user.password,
            userType: res.data.user.userType,
            batch_id: res.data.user.batch_id,
          },
        })
      );
      toast({
        title: "Login Successfull !!!",
        status: "success",
        duration: 1500,
        isClosable: true,
        position: "top",
      });
    })
    .catch((e) => {
      toast({
        title: "Login Failed !!!",
        status: "error",
        duration: 2000,
        isClosable: true,
        position: "top",
      });
      console.log(e);
    });
};

export const getLogout = (toast) => (dispatch) => {
  localStorage.setItem(
    "loginUser",
    JSON.stringify({
      user: {
        _id: "",
        first_name: "",
        last_name: "",
        mobile: 0,
        email: "",
        DOB: "",
        Gender: "",
        password: "",
        userType: "",
        batch_id: "",
      },
    })
  );
  dispatch(
    isLogin({
      user: {
        first_name: "",
        last_name: "",
        mobile: 0,
        email: "",
        DOB: "",
        Gender: "",
        password: "",
        userType: "",
        batch_id: "",
      },
    })
  );
  toast({
    title: "Logout Successfull !!!",
    status: "success",
    duration: 2000,
    isClosable: true,
    position: "top",
  });
};

export const getTotalCodingLectures = (batchId, fn) => () => {
  axios
    .get(`${API}/lecture/${batchId}`)
    .then((res) => {
      let x;
      x = res.data
        .sort((a, b) => {
          if (a.created_date > b.created_date) return -1;
          return 1;
        })
        .filter((e) => {
          if (e.lecture_name[0] == "C") return e;
        });
      fn(x);
    })
    .catch((e) => {
      console.log(e);
    });
};

export const getTotalDSALectures = (batchId, fn) => () => {
  axios
    .get(`${API}/lecture/${batchId}`)
    .then((res) => {
      let x;
      x = res.data
        .sort((a, b) => {
          if (a.created_date > b.created_date) return -1;
          return 1;
        })
        .filter((e) => {
          if (e.lecture_name[0] == "D") return e;
        });
      fn(x);
    })
    .catch((e) => {
      console.log(e);
    });
};

export const getTotalContest = (batchId, fn) => () => {
  axios
    .get(`${API}/assignment/${batchId}`)
    .then((res) => {
      let x;
      x = res.data.sort((a, b) => {
        if (a.created_date > b.created_date) return -1;
        return 1;
      });
      fn(x);
    })
    .catch((e) => {
      console.log(e);
    });
};

export const getAttendence = (batchId, fn) => () => {
  axios.get(`${API}/lecture/${batchId}`).then((res) => {
    let x;
    x = res.data.sort((a, b) => {
      if (a.created_date > b.created_date) return -1;
      return 1;
    });
    fn(x);
  });
};

export const getSubmission = (batchId, studentId, fn1, fn2) => () => {
  axios.get(`${API}/assignment/${batchId}`).then((res) => {
    let x, y;
    x = res.data
      .sort((a, b) => {
        if (a.created_date > b.created_date) return -1;
        return 1;
      })
      .filter((e) => {
        if (e.students.includes(studentId)) return e;
      });
    fn1(x);
    y = res.data
      .sort((a, b) => {
        if (a.created_date > b.created_date) return -1;
        return 1;
      })
      .filter((e) => {
        if (!e.students.includes(studentId)) return e;
      });
    fn2(y);
  });
};

export const totalPlaceStudents = (fn1) => () => {
  axios
    .get(`${API}/placement`)
    .then((res) => {
      let x = [];
      res.data.forEach((main, i) => {
        main.students.forEach((e) => {
          e.companyName = main.company_name;
          x.push(e);
        });
      });
      fn1(x);
    })
    .catch((e) => {
      console.log(e);
    });
};

export const hiringPartners = (fn1) => () => {
  axios
    .get(`${API}/placement`)
    .then((res) => {
      fn1(res.data);
    })
    .catch((e) => {
      console.log(e);
    });
};
