import Job from "./components/Job";

export const fetchData = (count, city, state, jobType) => {
  return fetch("http://localhost:3000/")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((jobs) => {
      const jobArr = [];
      for (let i = 0; i < count; i++) {
        if (
          jobs[i].job_city === city &&
          jobs[i].job_state === state &&
          jobs[i].job_description.includes(jobType)
        )
          jobArr.push(<Job key={jobs[i]._id} {...jobs[i]} />);
      }
      return jobArr;
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
};
