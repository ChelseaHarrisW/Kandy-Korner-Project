import React from "react";
import { Route, Redirect } from "react-router-dom";
import { ApplicationViews } from "../ApplicationView/ApplicationView";
import { Navbar } from "../nav/Navbar";
import { Login } from "../auth/login";
import { Register } from "../auth/register";

// ^^the functions above are importing statements that are later called below to render the coresponding import location that
// below are followed from the listed items. 
// the functions below are being called in a function called Repairs which is returning the functions ability to render the HTML to the DOM setCustomers
// see corresponding function at loocation.

export const KandyKorner = () => (
    <>
      <Route
        render={() => {
          if (localStorage.getItem("kandy_customer")) {
            return (
              <>
                <Navbar />
                <ApplicationViews />
              </>
            );
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />
  
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
    </>
  );
  
