import React from "react";
import styles from "./Form.module.css";

const formItem = [
  {
    key: 1,
    label: "Full Name",
    forID: "fullname",
    type: "text",
    name: "name",
    placeholder: "John Doe",
    maxlength: 50,
  },
  {
    key: 2,
    label: "Email",
    forID: "email",
    type: "email",
    name: "email",
    placeholder: "you@company.com",
    maxlength: 100,
  },
  {
    key: 3,
    label: "Phone Number",
    forID: "number",
    type: "tel",
    name: "phone",
    placeholder: "+1 (555) 123-4567",
    maxlength: 15,
  },
  {
    key: 4,
    label: "Message",
    forID: "message",
    type: "textarea",
    name: "message",
    placeholder: "Your Message",
    maxLength: 300,
  },
];

export default function Form() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "9e2c9ce9-318e-4968-acb8-8621af51e12c");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <>
      <form onSubmit={onSubmit} className={styles.form}>
        <h3 className={styles.contact}>Contact Us</h3>
        {formItem.map((item, index) => (
          <div className={styles.inputbox} key={index}>
            <label htmlFor={item.forID}>{item.label}</label>
            {item.type === "textarea" ? (
              <textarea
                id={item.forID}
                className={styles.bigbox}
                name={item.name}
                placeholder={item.placeholder}
                maxLength={item.maxLength}
                required
              ></textarea>
            ) : (
              <input
                id={item.forID}
                className={styles.inputs}
                type={item.type}
                name={item.name}
                placeholder={item.placeholder}
                maxLength={item.maxLength}
                required
              />
            )}
          </div>
        ))}
        <button className={styles.formbutton} type="submit">
          Submit
        </button>
        <span style={{ color: "black", textAlign: "center" }}>{result}</span>
      </form>
    </>
  );
}
