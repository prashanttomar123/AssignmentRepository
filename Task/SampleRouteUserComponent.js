import React, { useEffect } from "react";
import useSampleRouteConfig from "./useSampleRouteConfig";
import { Row, Card, CardContent } from "components/toolkit";
import { renderForm } from "utils/forms/FormUtils";
import { handleFirebaseUpload } from "funnel/utils/firebaseUploadUtil";

const SampleRouteUserComponent = ({
  control,
  watch,
  setValue,
  name,
  showSpinnerWithMessage,
  hideSpinnerWithMessage,
}) => {
  console.log(name);
  const document = watch(`${name}.Upload_File`);
  console.log(document, "myccbbafbeshb7r3836");
  useEffect(() => {
    // HERE you know the file was selected..
    async function uploadToFirebase() {
      if (document) {
        showSpinnerWithMessage();
        const fileData = document[0];
        const firebaseUrl = await handleFirebaseUpload(fileData);
        console.log(firebaseUrl);
        const pdf_upload = { url: firebaseUrl, name: fileData.name };
        setValue(`${name}.uploaded_file`, pdf_upload);
        hideSpinnerWithMessage();
      }
    }
    uploadToFirebase();
  }, [document]);

  const formConfig = useSampleRouteConfig();
  formConfig.forEach((field) => (field.name = `${name}.${field.name}`));
  return (
    <Card>
      <CardContent className="mb-4">
        <Row>{renderForm(formConfig, control)}</Row>
      </CardContent>
    </Card>
  );
};

export default SampleRouteUserComponent;
