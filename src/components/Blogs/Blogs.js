import React from "react";
// import cloudComputing from "../../images/cloud-computing.png";
// import httpOrHttps from "../../images/http-or-https.png";
// import passwordSafe from "../../images/password-safe.jpg";

const Blogs = () => {
  return (
    <section>
      <div className="container my-5">
        <h2 className="text-brand text-center my-5">
          You can explore your knowledge <br /> with our awesome blogs
        </h2>
        <div className="row">
          <div className="col-md-4">
            <div className=" shadow p-3 mb-5 bg-white rounded">
              <img style={{ width: "100%" }} src="" alt="" />
              <h4 className="text-brand my-3">
                Ways to keep your password safe
              </h4>
              <p>
                You must be having some basic knowledge on how, you can keep
                your password safe, secure and protected. Like, you must keep a
                long password with the maximum number of characters, using
                numbers and symbols etc. Still, there are some common pitfalls,
                that anybody with passwords should avoid keeping their password
                safe.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className=" shadow p-3 mb-5 bg-white rounded">
              <img style={{ width: "100%" }} src="" alt="" />
              <h4 className="text-brand my-3">
                What you need to use http or https
              </h4>
              <p>
                The HTTPS is better than HTTP because it provides security.
                Sometimes our website does not contain an e-commerce page that
                requires sensitive data; in that case, we can switch to the HTTP
                protocol. Despite the security, HTTPS also provides SEO. So, we
                do need to put more effort into boosting our SEO.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="shadow p-3 mb-5 bg-white rounded">
              <img style={{ width: "100%" }} src="" alt="" />
              <h4 className="text-brand my-3">cloud computing advantages</h4>
              <p>
                Cloud computing operates on a similar principle as web-based
                email clients, allowing users to access all of the features and
                files of the system without having to keep the bulk of that
                system on their own computers. Most people already use a variety
                of cloud computing services without even realizing it. Gmail,
                Google Drive, and even Facebook and Instagram are all
                cloud-based applications.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
