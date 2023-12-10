import React from "react";

function New() {
  return (
    <div>
      <table className="table text-nowrap mb-0">
        <thead>
          <tr>
            <th scope="row" className="fw-semibold ps-4">
              Country
            </th>
            <th scope="row" className="fw-semibold">
              Sales
            </th>
            <th scope="row" className="fw-semibold">
              Bounce
            </th>
          </tr>
        </thead>
        <tbody className="top-selling">
          <tr>
            <td className=" ps-4">
              {" "}
              <div className="d-flex align-items-center">
                {" "}
                <span className="avatar avatar-md p-2 bg-light avatar-rounded">
                  {" "}
                  <img
                    src="../assets/images/flags/canada_flag.jpg"
                    className="rounded-circle"
                    alt=""
                  />{" "}
                </span>{" "}
                <div className="ms-2">
                  {" "}
                  <p className="mb-0 fw-semibold">Canada</p>
                </div>{" "}
              </div>{" "}
            </td>
            <td>
              {" "}
              <span className="fw-semibold">2500</span>{" "}
            </td>
            <td>
              <span className="badge badge-sm bg-success-transparent text-success">
                24.4%
              </span>
            </td>
          </tr>
          <tr>
            <td className=" ps-4">
              {" "}
              <div className="d-flex align-items-center">
                {" "}
                <span className="avatar avatar-md p-2 bg-light avatar-rounded">
                  {" "}
                  <img
                    src="../assets/images/flags/germany_flag.jpg"
                    className="rounded-circle"
                    alt=""
                  />{" "}
                </span>{" "}
                <div className="ms-2">
                  {" "}
                  <p className="mb-0 fw-semibold">Germany</p>
                </div>{" "}
              </div>{" "}
            </td>
            <td>
              {" "}
              <span className="fw-semibold">846</span>{" "}
            </td>
            <td>
              <span className="badge badge-sm bg-danger-transparent text-danger">
                22.33%
              </span>
            </td>
          </tr>
          <tr>
            <td className=" ps-4">
              {" "}
              <div className="d-flex align-items-center">
                {" "}
                <span className="avatar avatar-md p-2 bg-light avatar-rounded">
                  {" "}
                  <img
                    src="../assets/images/flags/mexico_flag.jpg"
                    className="rounded-circle"
                    alt=""
                  />{" "}
                </span>{" "}
                <div className="ms-2">
                  {" "}
                  <p className="mb-0 fw-semibold">Mexico</p>
                </div>{" "}
              </div>{" "}
            </td>
            <td>
              {" "}
              <span className="fw-semibold">1,024</span>{" "}
            </td>
            <td>
              <span className="badge badge-sm bg-danger-transparent text-danger">
                14.8%
              </span>
            </td>
          </tr>
          <tr>
            <td className=" ps-4">
              {" "}
              <div className="d-flex align-items-center">
                {" "}
                <span className="avatar avatar-md p-2 bg-light avatar-rounded">
                  {" "}
                  <img
                    src="../assets/images/flags/russia_flag.jpg"
                    className="rounded-circle"
                    alt=""
                  />{" "}
                </span>{" "}
                <div className="ms-2">
                  {" "}
                  <p className="mb-0 fw-semibold">Russia</p>
                </div>{" "}
              </div>{" "}
            </td>
            <td>
              {" "}
              <span className="fw-semibold">482</span>{" "}
            </td>
            <td>
              <span className="badge badge-sm bg-success-transparent text-success">
                05.8%
              </span>
            </td>
          </tr>
          <tr>
            <td className=" ps-4 border-bottom-0">
              {" "}
              <div className="d-flex align-items-center">
                {" "}
                <span className="avatar avatar-md p-2 bg-light avatar-rounded">
                  {" "}
                  <img
                    src="../assets/images/flags/us_flag.jpg"
                    className="rounded-circle"
                    alt=""
                  />{" "}
                </span>{" "}
                <div className="ms-2">
                  {" "}
                  <p className="mb-0 fw-semibold">USA</p>
                </div>{" "}
              </div>{" "}
            </td>
            <td className="border-bottom-0">
              {" "}
              <span className="fw-semibold">1,410</span>{" "}
            </td>
            <td className="border-bottom-0">
              <span className="badge badge-sm bg-danger-transparent text-danger">
                13.08%
              </span>
            </td>
          </tr>{" "}
        </tbody>
      </table>
    </div>
  );
}

export default New;
