import React, { useState } from "react";

const ProductDescription = () => {
  const descButton = ["Additional Information"];
  const [show, setShow] = useState(false);

  function handleShow() {
    setShow(!show);
  }

  return (
    <div>
      <div className="flex gap-7 justify-start pl-5 underline items-center ">
        {descButton.map(function (desc) {
          return (
            <input
              type="button"
              className=" text-2xl font-bold cursor-pointer transition-colors duration-500  "
              value={desc}
              onClick={handleShow}
            />
          );
        })}
      </div>

      {show ?  (
        ""
      ) : (
        <div className="md:p-10">
          <p className="text-center p-3 font-light  
          text-gray-700">
          Nam tempus turpis at metus scelerisque placerat nulla deumantos
          solicitud felis. Pellentesque diam dolor, elementum etos lobortis des
          mollis ut risus. Sedcus faucibus an  sullamcorper mattis drostique des
          commodo pharetras loremos.
          </p>
          <h2 className="text-center text-2xl p-3 font-semibold">Products Infomation</h2>
        <p className="text-center p-3 font-light  
          text-gray-700">  A Pocket PC is a handheld computer, which
          features many of the same capabilities as a modern PC. These handy
          little devices allow individuals to retrieve and store e-mail
          messages, create a contact file, coordinate appointments, surf the
          internet, exchange text messages and more. Every product that is
          labeled as a Pocket PC must be accompanied with specific software to
          operate the unit and must feature a touchscreen and touchpad. As is
          the case with any new technology product, the cost of a Pocket PC was
          substantial during it’s early release. For approximately $700.00,
          consumers could purchase one of top-of-the-line Pocket PCs in 2003.
          These days, customers are finding that prices have become much more
          reasonable now that the newness is wearing off. For approximately
          $350.00, a new Pocket PC can now be purchased.</p>
          <h4 className="text-center text-2xl p-3 font-semibold">Material used</h4>
          <p className="text-center p-3 font-light  
          text-gray-700">
          Polyester is deemed lower quality due to its none natural quality’s.
          Made from synthetic materials, not natural like wool. Polyester suits
          become creased easily and are known for not being breathable.
          Polyester suits tend to have a shine to them compared to wool and
          cotton suits, this can make the suit look cheap. The texture of velvet
          is luxurious and breathable. Velvet is a great choice for dinner party
          jacket and can be worn all year round.
          </p>
        </div>
      ) }
    </div>
  );
};

export default ProductDescription;
