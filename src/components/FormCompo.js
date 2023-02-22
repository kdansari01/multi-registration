// import { InputData } from "../data/Data";

export const FormCompo = ({
  firstTitle,
  secTitle,
  thirdTitle,
  firstInpTyp,
  secInpTyp,
  thirdInpTyp,
  step,
  value,
  onChange,
  secIn,
  name,
  thirdInp
}) => {
  return (
    <>
      <section className="vh-100 " style={{ backgroundColor: "#9A616D" }}>
        <div className="container  h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-10">
              <div className="card" style={{ borderRadius: "1rem" }}>
                <div className="row g-0">
                  <div className="col-md-6 col-lg-5 d-none d-md-block">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                      alt="login form"
                      className="img-fluid"
                      style={{ borderRadius: "1rem 0 0 1rem" }}
                    />
                  </div>
                  <div className="col-md-6 col-lg-7 d-flex align-items-center ">
                    <div className="card-body p-4 p-lg-5 text-black">
                      <form>
                        <div className="d-flex justify-content-center align-items-center mb-3 pb-1">
                          <span className="h1 text-center fw-bold mb-0">
                            {step}
                          </span>
                        </div>

                        <div className="form-outline mb-4">
                          <input
                            onChange={onChange}
                            name={name}
                            value={value}
                            placeholder={firstTitle}
                            type={firstInpTyp}
                            id="form2Example17"
                            className="form-control form-control-lg"
                          />
                        </div>
                        {secIn ? (
                          <div className="form-outline mb-4">
                            <input
                              placeholder={secTitle}
                              type={secInpTyp}
                              id="form2Example27"
                              className="form-control form-control-lg"
                            />
                          </div>
                        ) : null}

                        {thirdInp ? (
                          <div className="form-outline mb-4">
                            <input
                              placeholder={thirdTitle}
                              type={thirdInpTyp}
                              id="form2Example27"
                              className="form-control form-control-lg"
                            />
                          </div>
                        ) : null}
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
