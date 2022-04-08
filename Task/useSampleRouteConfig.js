const useSampleRouteConfig = () => {
  const roleList = {
    roles: [{ role_title: "Option1" }, { role_title: "Option2" }],
  };
  const config = [
    {
      title: "Email",
      placeholder: "Enter your email",
      name: "Email",
      type: "Email",
      label: "Email",
      layoutClass: "col-xs-12 col-md-4",
      fieldType: "text",
    },
    {
      title: "Password",
      placeholder: "Enter your password",
      name: "Password",
      type: "Password",
      label: "Password",
      layoutClass: "col-xs-12 col-md-4",
      fieldType: "text",
    },
    {
      title: "Choice",
      placeholder: "Enter your Choice",
      name: "Choice",
      type: "select",
      label: "Choice",
      layoutClass: "col-xs-12 col-md-4",
      fieldType: "select",
      roleList: roleList,
    },
    {
      title: "URL",
      placeholder: "Test@quanscendence.com",
      name: "URL",
      type: "text",
      label: "URL",
      layoutClass: "col-xs-12 col-md-4",
      fieldType: "text",
    },
    {
      title: "Upload_File",
      placeholder: "Test@quanscendence.com",
      name: "Upload_File",
      type: "file",
      label: "Upload_File",
      layoutClass: "col-xs-12 col-md-4",
      fieldType: "file",
    },
    // {
    //   title: "Number",
    //   placeholder: "0000000000",
    //   name: "Number",
    //   type: "number",
    //   label: "Number",
    //   layoutClass: "col-xs-12 col-md-4",
    //   fieldType: "text",
    // },
    // {
    //   name: "resources",
    //   fieldType: "multiple-options-list",
    //   layoutClass: "col-md-12",
    //   noDisable: true,
    //   optionsList: [
    //     {
    //       answer: {
    //         optionValue: "pdf_link",
    //         label: "Choose File",
    //       },
    //       question: {
    //         fieldType: "file",
    //       },
    //     },
    //   ],
    // },
  ];
  return config;
};

export default useSampleRouteConfig;
