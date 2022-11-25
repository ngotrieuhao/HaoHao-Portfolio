import React, { useEffect, useRef } from "react";
import { FaLinkedin } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import Button from "../button/Button";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "../input/Input";
import Label from "../label/Label";
import Textarea from "../textarea/Textarea";

const schema = yup.object({
  to_name: yup.string().required("Please enter your name"),
  from_name: yup
    .string()
    .email("Please enter valid email address")
    .required("Please enter your email address"),
  message: yup.string().required("Please enter your message"),
});
const Contact = () => {
  const form = useRef();
  const {
    reset,
    control,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const sendEmail = (e) => {
    if (!isValid) return;
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(
          emailjs
            .sendForm(
              "service_6yy46g6",
              "template_z5qz4ie",
              form.current,
              "RKo3UJemrIRJ-PYmM"
            )
            .then(
              (result) => {
                toast.success("Send Email Successfully!");
              },
              (error) => {
                toast.error(error.message);
              }
            )
        );
        reset({
          to_name: "",
          from_name: "",
          message: "",
        });
      }, 2000);
    });
  };

  useEffect(() => {
    const arrErrors = Object.values(errors);
    if (arrErrors.length > 0) {
      toast.error(arrErrors[0]?.message, {
        pauseOnHover: false,
        delay: 100,
      });
    }
  }, [errors]);

  return (
    <section className="contact section" id="contact">
      <h2 className="section-title">Contact Me</h2>
      <div className="wrapper-contact__container">
        {/* <!--===== CONTACT LEFT=====--> */}
        <div className="contact__container--left">
          <div className="contact__left--title">Social Network</div>
          <div className="contact__left--content">
            <div className="contact__left--content_item">
              <div className="contact__left--content_item-heading">
                <box-icon
                  type="solid"
                  name="envelope"
                  size="md"
                  color="#4070F4"
                ></box-icon>
                <h4 className="contact__left--titleh4">Email:</h4>
              </div>

              <article>
                <a
                  href="mailto:ngotrieuhao2000@gmail.com"
                  style={{
                    textDecoration: "underline",
                  }}
                >
                  ngotrieuhao2000@gmail.com
                </a>
              </article>
            </div>
            <div className="contact__left--content_item">
              <div className="contact__left--content_item-heading">
                <box-icon
                  type="logo"
                  name="messenger"
                  size="md"
                  color="#4070F4"
                ></box-icon>
                <h4 className="contact__left--titleh4">Messenger:</h4>
              </div>

              <article>
                <p>Ngô Hảo</p>
                <a
                  href="https://m.me/ngotrieuhao"
                  className="contact__left--linkmess"
                  target="_blank"
                  rel="noreferrer"
                >
                  Send an message
                </a>
              </article>
            </div>
            <div className="contact__left--content_item">
              <div className="contact__left--content_item-heading">
                <box-icon
                  type="solid"
                  name="phone"
                  size="md"
                  color="#4070F4"
                ></box-icon>
                <h4 className="contact__left--titleh4">Phone:</h4>
              </div>

              <article>
                <p>+(084) 944334052</p>
                <a className="contact__left--linkmess" href="tel:0944334052">
                  Make a phone call
                </a>
              </article>
            </div>
            <div className="contact__left--content_item">
              <div className="contact__left--content_item-heading">
                <FaLinkedin size={"2rem"} />
                <h4 className="contact__left--titleh4">Linkedin:</h4>
              </div>

              <article>
                <p>Hảo Ngô</p>
                <a
                  href="https://www.linkedin.com/in/h%E1%BA%A3o-ng%C3%B4-795998184/"
                  className="contact__left--linkmess"
                  target="_blank"
                  rel="noreferrer"
                >
                  Open link
                </a>
              </article>
            </div>
          </div>
        </div>

        {/* <!--===== CONTACT RIGHT=====--> */}
        <div className="contact__container--right">
          <div className="contact__right--title">Let's talk</div>
          <form
            className="contact__form"
            id="form-1"
            ref={form}
            autoComplete="off"
            onSubmit={handleSubmit(sendEmail)}
          >
            <div className="form-group">
              <Input
                name="to_name"
                className="input_contact"
                placeholder=" "
                control={control}
              ></Input>
              <Label htmlFor="name">Name</Label>
              {/* <label className="form__label--name">Name</label> */}
            </div>
            <div className="form-group">
              {/* <input
                type="email"
                id="fromName"
                name="from_name"
                className="input_contact"
                placeholder=" "
              /> */}
              <Input
                name="from_name"
                className="input_contact"
                placeholder=" "
                type="email"
                control={control}
              ></Input>
              <Label htmlFor="email">Email</Label>
              {/* <label className="form__label--email">Email</label> */}
              {/* {error?.length > 0 ? (
                <Fragment>
                  <label className="form__label--email-error">Email</label>
                  <p className="p-2 mt-2 text-red-500">{error}</p>
                </Fragment>
              ) : (
                <label className="form__label--email">Email</label>
              )} */}
            </div>
            <div className="form-group">
              {/* <textarea
                id="msg"
                name="message"
                placeholder=" "
                className="input_message"
                cols="0"
                rows="10"
              ></textarea> */}
              <Textarea
                cols="0"
                name="message"
                rows="10"
                className="input_message"
                placeholder=" "
                control={control}
              ></Textarea>
              <Label htmlFor="message" className="form__label--message">
                Message
              </Label>
              {/* <label className="form__label--message">Message</label> */}

              <div className="button-submit">
                <Button
                  type="submit"
                  isLoading={isSubmitting}
                  disabled={isSubmitting}
                >
                  Send
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;