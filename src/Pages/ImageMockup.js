import Main from "../Components/Main";
import "./ImageMockup.css";
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage } from "@cloudinary/react";
import { fill, fit, scale } from "@cloudinary/url-gen/actions/resize";
import { source } from "@cloudinary/url-gen/actions/overlay";
import { image } from "@cloudinary/url-gen/qualifiers/source";
import { Transformation } from "@cloudinary/url-gen";
import { Position } from "@cloudinary/url-gen/qualifiers/position";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

function ImageMockup() {
  const cloudinaryRef = useRef();
  const widgetRef = useRef();
  const [currentProduct, setCurrentProduct] = useState(); // ["lShirt", "dShirt", "sticker", "frontMug", "backMug"

  const [productIds, setProductIds] = useState({
    lShirtId: "",
    dShirtId: "",
    stickerId: "",
    frontMugId: "",
    backMugId: "",
  });

  const cld = new Cloudinary({
    cloud: {
      cloudName: "umbrellaink",
      api_key: "779593931744297",
      api_secret: "C1fV4zvWfool7YDKib32KEw51WU",
    },
  });

  useEffect(() => {
    cloudinaryRef.current = window.cloudinary;
    widgetRef.current = cloudinaryRef.current.createUploadWidget(
      {
        cloudName: "umbrellaink",
        uploadPreset: "v2wd9hdn",
      },
      function (error, result) {
        if (!error && result && result.event === "success") {
          const info = result.info;

          switch (currentProduct) {
            case "lShirt":
              setProductIds((prevIds) => ({
                ...prevIds,
                lShirtId: info.public_id,
              }));
              break;
            case "dShirt":
              setProductIds((prevIds) => ({
                ...prevIds,
                dShirtId: info.public_id,
              }));
              break;
            case "sticker":
              setProductIds((prevIds) => ({
                ...prevIds,
                stickerId: info.public_id,
              }));
              break;
            case "frontMug":
              setProductIds((prevIds) => ({
                ...prevIds,
                frontMugId: info.public_id,
              }));
              break;
            case "backMug":
              setProductIds((prevIds) => ({
                ...prevIds,
                backMugId: info.public_id,
              }));
              break;
            default:
              break;
          }
        }
      }
    );
  }); // Empty dependency array to ensure the effect runs only once;

  const openWidget = (productType) => {
    setCurrentProduct(productType);
    setTimeout(() => {
      widgetRef.current.open();
    }, 0);
  };

  const removeLogo = (productId) => {
    setProductIds((prevIds) => ({
      ...prevIds,
      [productId]: "",
    }));
  };

  const hasCreatedProduct = () => {
    return (
      productIds.lShirtId !== "" ||
      productIds.dShirtId !== "" ||
      productIds.stickerId !== "" ||
      productIds.frontMugId !== "" ||
      productIds.backMugId !== ""
    );
  };

  const lightShirt = cld.image("v1605322171/adult-tees/TFP-GSet1-WH.jpg");
  const darkShirt = cld.image("v1605322171/adult-tees/TFP-GSet1-BK.jpg");
  const stickers = cld.image(
    "v1605154894/Stickers/Stickers-background-1000px.jpg"
  );
  const frontMugs = cld.image(
    "v1684850919/mugs/MUG-Set2-Flipped-WH_tgitp1.png"
  );
  const backMugs = cld.image("v1605441506/mugs/Mug-Rear-WH.jpg");

  const lightLogo = cld.image(productIds.lShirtId);
  const darkLogo = cld.image(productIds.dShirtId);
  const stickerLogo = cld.image(productIds.stickerId);
  const frontMugLogo = cld.image(productIds.frontMugId);
  const backMugLogo = cld.image(productIds.backMugId);

  if (currentProduct !== "") {
    if (productIds.lShirtId) {
      lightShirt
        .resize(fill())
        .overlay(
          source(
            image(lightLogo.publicID).transformation(
              new Transformation().resize(fit().width(300).height(300))
            )
          ).position(new Position().offsetX(10).offsetY(-100))
        );
    } else {
      lightShirt.resize(fill());
    }
    if (productIds.stickerId) {
      stickers
        .resize(fill())
        .overlay(
          source(
            image(stickerLogo.publicID).transformation(
              new Transformation().resize(fit().width(800).height(800))
            )
          )
        );
    } else {
      stickers.resize(fill());
    }
    if (productIds.frontMugId) {
      frontMugs
        .resize(fill())
        .overlay(
          source(
            image(frontMugLogo.publicID).transformation(
              new Transformation().resize(fit().width(300).height(300))
            )
          ).position(new Position().offsetX(100).offsetY(30))
        );
    } else {
      frontMugs.resize(fill());
    }
    if (productIds.backMugId) {
      backMugs
        .resize(fill())
        .overlay(
          source(
            image(backMugLogo.publicID).transformation(
              new Transformation().resize(fit().width(300).height(300))
            )
          ).position(new Position().offsetX(-80).offsetY(30))
        );
    } else {
      backMugs.resize(fill());
    }
    if (productIds.dShirtId) {
      darkShirt
        .resize(fill())
        .overlay(
          source(
            image(darkLogo.publicID).transformation(
              new Transformation().resize(fit().width(300).height(300))
            )
          ).position(new Position().offsetX(10).offsetY(-100))
        );
    } else {
      darkShirt.resize(fill());
    }
  }

  stickers.resize(fit());
  lightLogo.resize(scale().width(128).height(128));
  darkLogo.resize(scale().width(128).height(128));
  stickerLogo.resize(scale().width(128).height(128));
  frontMugLogo.resize(scale().width(128).height(128));
  backMugLogo.resize(scale().width(128).height(128));

  return (
    <div>
      <Main className="image-mockup-container">
        <h1 className="product-image title">Product Image</h1>
        <div className="product-image buttons">
          {/* <button>Original PDF</button> */}
          <button onClick={() => openWidget("lShirt")}>For Light</button>
          <button onClick={() => openWidget("dShirt")}>For Dark</button>
          {/* <button>Stickers PDF</button> */}
          <button onClick={() => openWidget("sticker")}>Stickers PNG</button>
          <div className={hasCreatedProduct() ? "" : "disabled-link"}>
            <Link to={"/products/upload"}>
              <button disabled={!hasCreatedProduct()}>Create</button>
            </Link>
          </div>
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
                  <button onClick={() => openWidget("lShirt")}>
                    Upload Image
                  </button>
                  <button onClick={() => removeLogo("lShirtId")}>
                    Remove Image
                  </button>
                </div>
              </div>
              <div className="shirt-logo-container">
                <AdvancedImage
                  className="image-box-dark"
                  src={darkLogo.toURL()}
                  alt=""
                />
                <div className="image-btn">
                  <button onClick={() => openWidget("dShirt")}>
                    Upload Image
                  </button>
                  <button onClick={() => removeLogo("dShirtId")}>
                    Remove Image
                  </button>
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
                  src={stickerLogo.toURL()}
                  alt=""
                />
                <div className="image-btn">
                  <button onClick={() => openWidget("sticker")}>
                    Upload Image
                  </button>
                  <button onClick={() => removeLogo("stickerId")}>
                    Remove Image
                  </button>
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
                  src={frontMugLogo.toURL()}
                  alt=""
                />
                <div className="image-btn">
                  <button onClick={() => openWidget("frontMug")}>
                    Upload Front
                  </button>
                  <button onClick={() => removeLogo("frontMugId")}>
                    Remove Image
                  </button>
                </div>
              </div>
              <div className="shirt-logo-container">
                <AdvancedImage
                  className="image-box-dark"
                  src={backMugLogo.toURL()}
                  alt=""
                />
                <div className="image-btn">
                  <button onClick={() => openWidget("backMug")}>
                    Upload Back
                  </button>
                  <button onClick={() => removeLogo("backMugId")}>
                    Remove Image
                  </button>
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
