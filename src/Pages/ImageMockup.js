import Main from "../Components/Main";
import "./ImageMockup.css";
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage } from "@cloudinary/react";
import { fill, fit, scale, flip } from "@cloudinary/url-gen/actions/resize";
import { source } from "@cloudinary/url-gen/actions/overlay";
import { image } from "@cloudinary/url-gen/qualifiers/source";
import { Transformation } from "@cloudinary/url-gen";
import { Position } from "@cloudinary/url-gen/qualifiers/position";
import { Flip } from "@cloudinary/url-gen";
import { useState } from "react";
import { effect } from "@cloudinary/url-gen/actions/effect";

function ImageMockup() {
  const cld = new Cloudinary({
    cloud: {
      cloudName: "umbrellaink",
      api_key: "779593931744297",
      api_secret: "C1fV4zvWfool7YDKib32KEw51WU",
    },
  });

  const lightShirt = cld.image("v1605322171/adult-tees/TFP-GSet1-WH.jpg");
  const darkShirt = cld.image("v1605322171/adult-tees/TFP-GSet1-BK.jpg");
  const stickers = cld.image(
    "v1605154894/Stickers/Stickers-background-1000px.jpg"
  );
  const frontMugs = cld.image("v1605156385/mugs/MUG-Set2-WH.jpg");
  const backMugs = cld.image("v1605441506/mugs/Mug-Rear-WH.jpg");
  const lightLogo = cld.image(
    "v1682674768/artwork/14705-stickers-artwork_57b0cf3e-c748-4b50-9568-76be3eadeda6.png"
  );
  const darkLogo = cld.image(
    "v1682674680/artwork/14705-artwork-dark_21cedb78-9ace-4112-bd44-57f88d4f9bc7.png"
  );

  console.log(lightLogo);

  if (lightLogo.publicID !== "") {
    lightShirt
      .resize(fill())
      .overlay(
        source(
          image(lightLogo.publicID).transformation(
            new Transformation().resize(fit().width(300).height(300))
          )
        ).position(new Position().offsetX(10).offsetY(-100))
      );

    stickers
      .resize(fill())
      .overlay(
        source(
          image(lightLogo.publicID).transformation(
            new Transformation().resize(fit().width(800).height(800))
          )
        )
      );

    frontMugs
      .resize(fill())
      .overlay(
        source(
          image(lightLogo.publicID).transformation(
            new Transformation().resize(fit().width(300).height(300))
          )
        ).position(new Position().offsetX(-80).offsetY(30))
      );

    backMugs
      .resize(fill())
      .overlay(
        source(
          image(lightLogo.publicID).transformation(
            new Transformation().resize(fit().width(300).height(300))
          )
        ).position(new Position().offsetX(-80).offsetY(30))
      );
  }

  if (darkLogo.publicID !== "") {
    darkShirt
      .resize(fill())
      .overlay(
        source(
          image(darkLogo.publicID).transformation(
            new Transformation().resize(fit().width(300).height(300))
          )
        ).position(new Position().offsetX(10).offsetY(-100))
      );
  }

  stickers.resize(fit());
  lightLogo.resize(scale().width(128).height(128));
  darkLogo.resize(scale().width(128).height(128));

  return (
    <div>
      <Main className="image-mockup-container">
        <h1 className="product-image title">Product Image</h1>
        <div className="product-image buttons">
          <button>Original PDF</button>
          <button>For Light</button>
          <button>For Dark</button>
          <button>Stickers PDF</button>
          <button>Stickers PNG</button>
          <button>Create</button>
        </div>
        <div className="product-image-SScontainer">
          <div className="product-image shirts">
            <h3>Shirts</h3>
            <div className="shirt-card-container">
              <div className="shirt-logo-container">
                <AdvancedImage
                  className="image-box"
                  src={lightLogo.toURL()}
                  alt=""
                />
                <div className="image-btn">
                  <button>Upload Image</button>
                  <button>Remove Image</button>
                </div>
              </div>
              <div className="shirt-logo-container">
                <AdvancedImage
                  className="image-box-dark"
                  src={darkLogo.toURL()}
                  alt=""
                />
                <div className="image-btn">
                  <button>Upload Image</button>
                  <button>Remove Image</button>
                </div>
              </div>
              <AdvancedImage
                className="product-image-box "
                src={lightShirt.toURL()}
                alt=""
              />
              <AdvancedImage
                className="product-image-box "
                src={darkShirt.toURL()}
                alt=""
              />
            </div>
            <span className="input-container">
              <input type="checkbox" />
              Upload
            </span>
          </div>
          <div className="product-image stickers">
            <h3>Stickers</h3>
            <div className="shirt-card-container">
              <div className="shirt-logo-container">
                <AdvancedImage
                  className="image-box"
                  src={lightLogo.toURL()}
                  alt=""
                />
                <div className="image-btn">
                  <button>Upload Image</button>
                  <button>Remove Image</button>
                </div>
              </div>
              <AdvancedImage
                className="product-image-box "
                src={stickers.toURL()}
                alt=""
              />
            </div>
            <span className="input-container">
              <input type="checkbox" />
              Upload
            </span>
          </div>
          <div className="product-image mugs">
            <h3>Mugs</h3>
            <div className="shirt-card-container">
              <div className="shirt-logo-container">
                <AdvancedImage
                  className="image-box"
                  src={lightLogo.toURL()}
                  alt=""
                />
                <div className="image-btn">
                  <button>Upload Front</button>
                  <button>Remove Image</button>
                </div>
              </div>
              <div className="shirt-logo-container">
                <AdvancedImage
                  className="image-box-dark"
                  src={darkLogo.toURL()}
                  alt=""
                />
                <div className="image-btn">
                  <button>Upload Back</button>
                  <button>Remove Image</button>
                </div>
              </div>
              <AdvancedImage
                className="product-image-box "
                src={frontMugs.toURL()}
                alt=""
              />
              <AdvancedImage
                className="product-image-box "
                src={backMugs.toURL()}
                alt=""
              />
            </div>
            <span className="input-container">
              <input type="checkbox" />
              Upload
            </span>
          </div>
        </div>
      </Main>
    </div>
  );
}

export default ImageMockup;
