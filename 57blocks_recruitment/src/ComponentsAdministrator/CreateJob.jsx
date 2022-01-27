import { React, useState } from "react";
import axios from "axios";

const CreateJob = () => {
  const [nameJob, setNameJob] = useState("");
  const [summary, setSummary] = useState("");
  const [whatWillYouDo, setWhatWillYouDo] = useState("");
  const [weWouldLike, setWeWouldLike] = useState("");
  const [toLikeOffer, setToLikeOffer] = useState("");

  const onChangeNameJob = (e) => {
    setNameJob(e.target.value);
  };
  const onChangeSummary = (e) => {
    setSummary(e.target.value);
  };
  const onChangeWhatWillYouDo = (e) => {
    setWhatWillYouDo(e.target.value);
  };
  const onChangeWeWouldLike = (e) => {
    setWeWouldLike(e.target.value);
  };
  const onChangeToLikeOffer = (e) => {
    setToLikeOffer(e.target.value);
  };

  const onSave = () => {
    axios
      .post("https://stormy-river-28303.herokuapp.com/api/v1/jobs", {
        name: nameJob,
        summary: summary,
        jobDescription: whatWillYouDo,
        jobDescriptionWishes: weWouldLike,
        jobOffer: toLikeOffer,
      })
      .then(
        (result) => {
          console.log("data", result.data);
        },
        (error) => {
          console.log(error);
        }
      );
  };

  const handleCancel = () => {
    window.location = "/adminJobList";
  };

  return (
    <>
      <div
        style={{
          width: "80%",
          display: "inline-flex",
          justifyContent: "center",
          marginLeft: 200,
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gridGap: " 1.3vh",
            gridRow: "auto",
            boxShadow: `5px 5px 5px 5px #00000029`,
            width: "100%",
            height: "500px",
            borderRadius: "15px",
            padding: "4rem",
            marginTop: 60,
            alignItems: "center",
            justifyItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              width: "300px",
              height: "70px",
              flexDirection: "column",
              border: 0,
              borderBottom: `1px solid #000000`,
              marginBottom: 0,
            }}
          >
            <label
              style={{ color: "#94979B", fontSize: 14, textAlign: "start" }}
              htmlFor="inputName"
            >
              Name/Job
            </label>
            <input
              style={{ border: 0, fontSize: 15 }}
              type="text"
              value={nameJob}
              placeholder="Senior Frontend Developer"
              required
              onChange={onChangeNameJob}
            ></input>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              borderBottom: "none",
              width: "300px",
              height: "150px",
              flexDirection: "column",
              border: 0,
              borderBottom: `1px solid #000000`,
              marginTop: 60,
              justifyItems: "center",
            }}
          >
            <label
              style={{
                color: "#94979B",
                fontSize: 14,
                marginBottom: 10,
                textAlign: "start",
              }}
              htmlFor="inputEmail"
            >
              We would like to talk to you if you
            </label>
            <textarea
              style={{ height: "186px", borderRadius: 5 }}
              value={weWouldLike}
              placeholder="Description"
              required
              onChange={onChangeWeWouldLike}
            ></textarea>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              borderBottom: "none",
              width: "300px",
              height: "150px",
              flexDirection: "column",
              border: 0,
              borderBottom: `1px solid #000000`,
            }}
          >
            <label
              style={{
                color: "#94979B",
                fontSize: 14,
                marginBottom: 10,
                textAlign: "start",
              }}
              htmlFor="inputEmail"
            >
              Summary
            </label>
            <textarea
              style={{ height: "186px", borderRadius: 5 }}
              value={summary}
              placeholder="Description"
              required
              onChange={onChangeSummary}
            ></textarea>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              borderBottom: "none",
              width: "300px",
              height: "150px",
              flexDirection: "column",
              border: 0,
              borderBottom: `1px solid #000000`,
            }}
          >
            <label
              style={{
                color: "#94979B",
                fontSize: 14,
                marginBottom: 10,
                textAlign: "start",
              }}
              htmlFor="inputEmail"
            >
              What we like to offer you is
            </label>
            <textarea
              style={{ height: "186px", borderRadius: 5 }}
              value={toLikeOffer}
              placeholder="Description"
              required
              onChange={onChangeToLikeOffer}
            ></textarea>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              borderBottom: "none",
              width: "300px",
              height: "150px",
              flexDirection: "column",
              border: 0,
              borderBottom: `1px solid #000000`,
            }}
          >
            <label
              style={{
                color: "#94979B",
                fontSize: 14,
                marginBottom: 10,
                textAlign: "start",
              }}
              htmlFor="inputEmail"
            >
              What will you do
            </label>
            <textarea
              style={{ height: "186px", borderRadius: 5 }}
              value={whatWillYouDo}
              placeholder="Description"
              required
              onChange={onChangeWhatWillYouDo}
            ></textarea>
          </div>

          <div>
            <button
              style={{
                marginRight: "3rem",
                padding: "6px 40px",
                border: `1px solid #2B7BF4`,
                backgroundColor: "white",
                color: "#2B7BF4",
                borderRadius: 5,
              }}
              onClick={handleCancel}
            >
              Cancel
            </button>

            <button
              style={{
                marginRight: "0.2rem",
                padding: "6px 40px",
                border: `1px solid #2B7BF4`,
                backgroundColor: "#2B7BF4",
                color: "white",
                borderRadius: 5,
              }}
              onClick={onSave}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateJob;
