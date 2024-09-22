import React from "react";
import styles from "./FormField.module.scss";

type FormFieldProps = {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
  error: { message: string };
}
const FormField = ({
                     label,
                     children,
                     htmlFor,
                     error
                   }: FormFieldProps) => {
  const id = htmlFor || getChildId(children);

  return (
    <div className={styles.formFieldContainer}>
      {label && (
        <label htmlFor={id} className={styles.visuallyHidden}>
          {label}
        </label>
      )}
      {children}
      <div role="alert" className={styles.error}>
        {error.message}
      </div>
    </div>
  );
};

const getChildId = (children: React.ReactNode) => {
  const child = React.Children.only(children) as React.ReactElement;
  return child?.props?.id;
};

export default FormField;
