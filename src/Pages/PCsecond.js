import Main from "../Components/Main";
import "./ProductCreate.css";
import React, { useState } from 'react';

function PCsecond() {
  const [productTitle, setProductTitle] = useState('');
  const [artist, setArtist] = useState('');
  const [source, setSource] = useState('');
  const [shopifyTags, setShopifyTags] = useState('');
  const [tshirtPrice, setTshirtPrice] = useState('');
  const [tshirtWeight, setTshirtWeight] = useState(0.2);
  const [tshirtPrint, setTshirtPrint] = useState('p');
  const [tshirtImage, setTshirtImage] = useState('set1');

  const handleSubmit = (e) => {
    e.preventDefault();
    // 在这里执行提交表单的操作
    // 可以将表单中的所有元素信息通过API发送到服务器
    // 例如：调用一个提交表单的API函数，并传递所有元素的值
    // submitForm({ productTitle, artist, source, shopifyTags, tshirtPrice, tshirtWeight, tshirtPrint, tshirtImage });
    console.log('Form submitted:', {
      productTitle,
      artist,
      source,
      shopifyTags,
      tshirtPrice,
      tshirtWeight,
      tshirtPrint,
      tshirtImage
    });
  };

  const [categoryItems, setCategoryItems] = useState([
    'Funny',
    'Vegan',
    'Hippie',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    // ...其他类别
  ]);

  const [keywordItems, setKeywordItems] = useState([
    'Inspirational Kind Top Tee Womens Mens',
    'Inspirational Funny Summer Women Men',
    'Funny Tshirt Tee Men Women Gift Top',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    // ...其他关键词
  ]);


  //category and keyword
  const [categorySearchTerm, setCategorySearchTerm] = useState('');
  const [keywordSearchTerm, setKeywordSearchTerm] = useState('');

  const handleCategoryItemClick = (categoryName) => {
    const filteredKeywords = keywordItems.filter((keyword) =>
      keyword.toLowerCase().includes(categoryName.toLowerCase())
    );
    setKeywordItems(filteredKeywords);
  };

  const handleCategorySearchInputChange = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    const filteredCategories = categoryItems.filter((category) =>
      category.toLowerCase().includes(searchTerm)
    );
    setCategoryItems(filteredCategories);
    setCategorySearchTerm(searchTerm);
  };

  const handleKeywordSearchInputChange = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    const filteredKeywords = keywordItems.filter((keyword) =>
      keyword.toLowerCase().includes(searchTerm)
    );
    setKeywordItems(filteredKeywords);
    setKeywordSearchTerm(searchTerm);
  };


  return (
    <Main>
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="pc-pc">
          <div className="second">
            <div className="row">
              <div className="pc-pt">
                <h1>Product Title</h1>
                <hr align="left" />
                <div className="form-group">
                  <input
                    className="form-control"
                    name="product_title"
                    placeholder="Enter Product Title"
                    maxLength={25}
                    value={productTitle}
                    onChange={(e) => setProductTitle(e.target.value)}
                    required
                  />
                  <div className="pc-invalidfeedback" />
                </div>
              </div>
              <div className="pc-artist">
                <h1>Artist</h1>
                <hr align="left" />
                <div className="form-group">
                  <select
                    name="artist"
                    className="form-control"
                    value={artist}
                    onChange={(e) => setArtist(e.target.value)}
                    required
                  >
                    <option value="">Select Artist</option>
                    {/* 添加选项 */}
                    <option value="artist1">Artist 1</option>
                    <option value="artist2">Artist 2</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="pc-source">
                <h1>Source</h1>
                <hr align="left" />
                <div className="form-group">
                  <textarea
                    className="form-control"
                    name="source"
                    placeholder="Enter Source"
                    value={source}
                    onChange={(e) => setSource(e.target.value)}
                    required
                  />
                  <div className="pc-invalidfeedback" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="pc-st">
                <h1>Shopify Tags</h1>
                <hr align="left" />
                <div className="form-group">
                  <input
                    className="form-control"
                    placeholder="Enter Shopify Tags"
                    type="text"
                    value={shopifyTags}
                    onChange={(e) => setShopifyTags(e.target.value)}
                    required
                  />
                  <div className="pc-invalidfeedback" />
                </div>
              </div>
              <div className="pc-pt">
                <h1>Tshirt Price</h1>
                <hr align="left" />
                <div className="form-group">
                  <input
                    className="form-control"
                    placeholder="Enter Tshirt Price"
                    type="number"
                    step="0.01"
                    min="0"
                    value={tshirtPrice}
                    onChange={(e) => setTshirtPrice(e.target.value)}
                    required
                  />
                  <div className="pc-invalidfeedback" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="pc-pt">
                <h1>Tshirt Weight</h1>
                <hr align="left" />
                <div className="form-group">
                  <input
                    className="form-control"
                    placeholder="Enter Tshirt Weight"
                    type="number"
                    step="0.01"
                    min="0"
                    value={tshirtWeight}
                    onChange={(e) => setTshirtWeight(e.target.value)}
                    required
                  />
                  <div className="pc-invalidfeedback" />
                </div>
              </div>
              <div className="pc-artist">
                <h1>Tshirt Print</h1>
                <hr align="left" />
                <div className="form-group">
                  <select
                    name="tshirt_print"
                    className="form-control"
                    value={tshirtPrint}
                    onChange={(e) => setTshirtPrint(e.target.value)}
                    required
                  >
                    <option value="p">P</option>
                    <option value="q">Q</option>
                    <option value="r">R</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="pc-pt">
                <h1>Tshirt Image</h1>
                <hr align="left" />
                <div className="form-group">
                  <select
                    name="tshirt_image"
                    className="form-control"
                    value={tshirtImage}
                    onChange={(e) => setTshirtImage(e.target.value)}
                    required
                  >
                    <option value="set1">Set1</option>
                    <option value="set2">Set2</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="create-button">
                <button className="create-btn" type="submit">Create</button>
              </div>
            </div>
          </div>

          <div>
      <div className="pc-cg">
        <div className="cg-control">
          <h1>Category</h1>
          <hr align="left" />
          <div className="category-form">
            <div className="input-group-cf">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <i className="category-scearch"></i>
                </span>
              </div>
              <input
                className="cg-form-control"
                placeholder="Search"
                name="searchCategory"
                type="text"
                value={categorySearchTerm}
                onChange={handleCategorySearchInputChange}
              />
            </div>
          </div>
          <ul className="category-list" id="item-list">
            {categoryItems.map((category) => (
              <li
                key={category}
                className="listgroup-item"
                onClick={() => handleCategoryItemClick(category)}
                action="true"
              >
                {category}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="pc-kw">
        <div className="kw-control">
          <h1>Keyword</h1>
          <hr align="left" />
          <div className="keyword-form">
            <div className="input-group-cf">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <i className="category-scearch"></i>
                </span>
              </div>
              <input
                className="cg-form-control"
                placeholder="Search"
                name="searchKeyword"
                type="text"
                value={keywordSearchTerm}
                onChange={handleKeywordSearchInputChange}
              />
            </div>
          </div>
          <ul className="category-list" id="item-list">
            {keywordItems.map((keyword) => (
              <li key={keyword} className="listgroup-item" action="true">
                {keyword}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>


        </div>
      </div>
    </form>
    </Main>
  );
}

export default PCsecond;