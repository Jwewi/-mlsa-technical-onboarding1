/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * certification list
 *
 * An array of objects that will be used to display for your certification
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const certificationList = [
  {
    title: "Microsoft 365 Fundamentals MS-900",
    description:
      "the benefits of adopting cloud services, the Software as a Service (SaaS) cloud model, and implementing Microsoft 365 cloud service.",
    url: "https://www.credly.com/badges/28fad9cb-229b-4137-b396-65346e19335e/public_url",
  },
  {
    title: "Microsoft Power Platforms Fundamentals PL-900",
    description:
      "improve productivity by automating business processes, analyzing data to produce business insights, and acting more effectively by creating simple app experiences",
    url: "https://www.credly.com/badges/159f8252-7620-41c3-8f6a-3aa9ad84064e/public_url",
  },
  {
    title: "Microsoft Azure Fundamentals AZ-900",
    description:
      "demonstrate foundational level knowledge of cloud services and how those services are provided with Microsoft Azure",
    url: "https://www.credly.com/badges/476e9897-2eab-4e07-8d11-c2be1da2a639/public_url",
  },
  {
    title: "NVIDIA DLI Certificate–Fundamentals of Deep Learning",
    description:
      "demonstrating competence in the completion ofWorkshop/Fundamentals of Deep Learning",
    url: "https://courses.nvidia.com/certificates/3285b7736ebc4fa99f79ef6ed1ee630a",
  },
];

const certification = () => {
  return (
    <section className="padding" id="certification">
      <h2 style={{ textAlign: "center" }}>certification</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {certificationList.map((certification) => (
            <div className="box" key={certification.title}>
              <a href={certification.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{certification.title}</h3>
              </a>
              <p className="small">{certification.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default certification;
