import { useState } from "react";
import { Footer } from "../../components/Footer/Footer";
import Produto from "../../components/Produto/produto";

import background from "../../assets/Group 78.svg";
import nav from "../../assets/Group 57.svg";
import nav2 from "../../assets/bi_view-list.svg";
import nav3 from "../../assets/ci_grid-big-round.svg";
import imgP from "../../assets/image 4.svg";

import "../../index.css";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/Shadcn/ui/pagination";

interface Produto1 {
  imageCardName: string;
  imageCardDescription: string;
  imageCardPrice: number;
  imageUrl: string;
  BeforePrice?: number;
}

const produtos: Produto1[] = Array.from({ length: 20 }, (_, index) => ({
  imageCardName: `Syltherine`,
  imageCardDescription: `Stylish cafe chair`,
  imageCardPrice: 1000 + index * 1000,
  imageUrl: imgP,
}));

export function Shop() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 16;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = produtos.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(produtos.length / itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <img className="w-full object-cover" src={background} alt="" />

      <div className="bg-[#F9F1E7] w-full h-32">
        <div className="flex justify-between py-9 px-32 items-center">
          <div className="flex items-center gap-6">
            <img src={nav} alt="Navigation" />
            <img src={nav2} alt="View List" />
            <img src={nav3} alt="Grid View" />

            <div className="border-l border-solid pl-11 ml-5 text-2x0 mb-4">
              <p>
                Showing {indexOfFirstItem + 1} - 16 of {produtos.length} results
              </p>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <p className="text-2x0 mb-4">Show</p>
            <p className="text-2x0 py-4 px-5 bg-white text-[#9F9F9F]">
              {itemsPerPage}
            </p>
            <p className="text-2x0 mb-4">Sort by</p>
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

      <div className="flex justify-center my-10 pl-52">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  if (currentPage > 1) handlePageChange(currentPage - 1);
                }}
                className="-mr-5 opacity-30"
              />
            </PaginationItem>

            {Array.from({ length: totalPages }, (_, index) => (
              <PaginationItem key={index}>
                <PaginationLink
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    handlePageChange(index + 1);
                  }}
                  className={
                    currentPage === index + 1
                      ? ' text-white  bg-brown text-2x0' 
                      : 'text-2x0  text-black bg-[#F9F1E7]'
                  }
                >
                  {index + 1}
                </PaginationLink>
              </PaginationItem>
            ))}

            <PaginationItem>
              <PaginationNext
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  if (currentPage < totalPages) handlePageChange(currentPage + 1);
                }}
                className="-ml-0"
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
      <Footer />
    </div>
  );
}
