import { useState } from "react";
import { Footer } from "../../components/Footer/Footer";
import background from "../../assets/Group 78.svg";
import nav from "../../assets/Group 57.svg";
import nav2 from "../../assets/bi_view-list.svg";
import nav3 from "../../assets/ci_grid-big-round.svg";
import "../../index.css";
import imgP from "../../assets/image 4.svg";
import Produto from "../../components/Produto/produto";

interface Produto1 {
  imageCardName: string;
  imageCardDescription: string;
  imageCardPrice: number;
  imageUrl: string;
  BeforePrice?: number;
}

const produtos: Produto1[] = Array.from({ length: 20 }, (_, index) => ({
  imageCardName: `Prod ${index + 1}`,
  imageCardDescription: `Desc ${index + 1}`,
  imageCardPrice: 20 + (index % 5) * 5,
  imageUrl: imgP,
}));

export function Shop() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 16;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = produtos.slice(indexOfFirstItem, indexOfLastItem);

  const nextPage = () => {
    if (currentPage < Math.ceil(produtos.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div>
      <img className="w-12/12 object-cover " src={background} alt="" />

      <div className="bg-[#F9F1E7] w-full h-32">
        <div className="flex justify-between py-9 px-32 items-center">
          <div className="flex items-center gap-6">
            <img src={nav} />
            <img src={nav2} />
            <img src={nav3} />

            <div className="border-l border-solid pl-11 ml-5 text-2x0">
              <p>
                Showing {indexOfFirstItem + 1} - 16 of {produtos.length} results
              </p>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <p className="text-2x0">Show</p>
            <p className="text-2x0 py-4 px-5 bg-white text-[#9F9F9F]">
              {itemsPerPage}
            </p>
            <p className="text-2x0">Short by</p>
            <p className="text-2x0 bg-white text-[#9F9F9F] pl-6 pr-20 py-4">
              Default
            </p>
          </div>
        </div>
      </div>

      <div className="products">
        <div className="c_products grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mr-10 ml-10 mt-12 mb-12">
          {currentItems.map((produto, index) => (
            <Produto
              key={index}
              imageUrl={produto.imageUrl}
              imageCardName={produto.imageCardName}
              imageCardDescription={produto.imageCardDescription}
              imageCardPrice={produto.imageCardPrice}
            />
          ))}
        </div>
      </div>

      <div className="flex justify-center gap-4 mb-12">
        <div className="flex items-center gap-2">
          {Array.from(
            { length: Math.ceil(produtos.length / itemsPerPage) },
            (_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index + 1)}
                className={`px-4 py-2 rounded ${
                  currentPage === index + 1
                    ? "bg-[#B88E2F] text-white"
                    : "bg-gray-300 text-gray-600"
                }`}
              >
                {index + 1}
              </button>
            )
          )}
        </div>
        <button
          onClick={nextPage}
          disabled={currentPage === Math.ceil(produtos.length / itemsPerPage)}
          className="bg-gray-300 text-gray-600 px-4 py-2 rounded"
        >
          Next
        </button>
      </div>

      <Footer />
    </div>
  );
}
