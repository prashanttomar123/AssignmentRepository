import React, { useState } from "react";
import { Form, Row, Col, Alert } from "components/toolkit";
import DashboardLayout from "components/layouts/DashboardLayout";
import { useForm, useFieldArray } from "react-hook-form";
import ButtonComponent from "utils/buttons/ButtonComponent";
import { DisplayUsers } from "pages/UsersPage";

import { Spinner } from "components/toolkit";
import SampleRouteUserComponent from "./SampleRouteUserComponent";

const SampleRoute = () => {
  const { control, watch, handleSubmit, setValue, register } = useForm({
    Email: "",
    password: "",
    URL: "",
    Choice: "",
    Upload_File: "",
  });
  const { fields: userFields, append } = useFieldArray({
    name: "users",
    control: control,
  });
  const [state, setState] = useState({});
  const [showSpinner, setShowSpinner] = useState({
    show: false,
    message: null,
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const submitHandler = (value) => {
    setState(value);
    setIsSubmitted(true);
    console.log(value, "myvalues$$$$@@@@");
  };
  // console.log(state.Upload_File.name);
  const document = watch("Upload_File");
  // console.log(document, "documentvalue########");
  const showSpinnerWithMessage = () => {
    setShowSpinner({ show: true, message: "Uploading please wait" });
  };

  const hideSpinnerWithMessage = () => {
    setShowSpinner({ show: false, message: "File Uploaded" });
    setTimeout(() => {
      setShowSpinner({ message: null });
    }, 3000);
  };

  return (
    <DashboardLayout>
      <div className=" table-view">
        <Form onSubmit={handleSubmit(submitHandler)}>
          {userFields.map((field, index) => (
            <SampleRouteUserComponent
              control={control}
              key={field.id}
              watch={watch}
              setValue={setValue}
              showSpinnerWithMessage={showSpinnerWithMessage}
              hideSpinnerWithMessage={hideSpinnerWithMessage}
              {...register(`users.${index}`)}
            />
          ))}

          {/* <hr /> */}

          {showSpinner && (
            <div id="overlayMesaage" className="d-flex">
              <div className="col-md-12 d-flex">
                {showSpinner.show && (
                  <Spinner className="mt-3 mr-3" size={20} color="secondary" />
                )}
                <h5
                  className={
                    showSpinner.show
                      ? "text-dark mt-3 fs-2"
                      : "text-success mt-3 fs-2"
                  }
                >
                  {showSpinner.message}
                </h5>
              </div>
            </div>
          )}
          <Row>
            <Col className="col-md-2">
              <ButtonComponent
                label="Append"
                type={"button"}
                onClick={() =>
                  append({
                    Email: "",
                    password: "",
                    URL: "",
                    Choice: "",
                    Upload_File: "",
                  })
                }
              />
            </Col>
            <Col className="col-md-2">
              <ButtonComponent label="Submit" type="Submit" />
            </Col>
          </Row>
        </Form>
        {isSubmitted && (
          <>
            {/* <table>
            <tr>
              <th>Email</th>
              <th>Password</th>
              <th>selection</th>
              <th>URL</th>
              <th>Number</th>
            </tr>
            <tr>
              <td>{state.Email}</td>
              <td>{state.Password}</td>
              <td>{state.Choice}</td>
              <td>{state.URL}</td>
              <td>{state.Number}</td>
            </tr>
          </table> */}
            {state.users.map((item, index) => (
              <DisplayUsers
                profile_id={index}
                created_at={Date.now()}
                first_name="Prashant"
                last_name="Tomar"
                email={item.Email}
                role_title={item.Choice}
                handleModalOpen={() => {}}
                handleEdit={() => {}}
                URL={item.URL}
                uploaded_file={item.uploaded_file.url}
              />
            ))}
          </>
        )}
      </div>
    </DashboardLayout>
  );
};

export default SampleRoute;
// profile_id,
//   created_at,
//   first_name,
//   last_name,
//   email,
//   role_title,
//   handleModalOpen,
//   handleEdit,
