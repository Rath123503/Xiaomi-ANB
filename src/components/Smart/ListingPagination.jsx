import React from 'react';
import { MaterialIcon } from '../common/MaterialIcon';

export const ListingPagination = ({ currentPage, totalPages, onPageChange }) => (
  <div className="flex items-center justify-center gap-6 py-14">
    <button
      type="button"
      onClick={() => onPageChange(Math.max(1, currentPage - 1))}
      disabled={currentPage === 1}
      aria-label="Previous page"
      className="flex h-11 w-11 items-center justify-center rounded-md bg-black text-white transition-colors duration-300 hover:bg-gray-700 disabled:cursor-not-allowed disabled:opacity-40 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2"
    >
      <MaterialIcon name="chevron_left" size={20} />
    </button>

    <div className="flex items-center gap-5">
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <button
          key={page}
          type="button"
          onClick={() => onPageChange(page)}
          aria-label={`Go to page ${page}`}
          aria-current={page === currentPage}
          className={`text-base font-semibold transition-colors duration-200 focus:outline-none ${
            page === currentPage ? 'text-orange-500' : 'text-gray-900 hover:text-orange-500'
          }`}
        >
          {page}
        </button>
      ))}
    </div>

    <button
      type="button"
      onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
      disabled={currentPage === totalPages}
      aria-label="Next page"
      className="flex h-11 w-11 items-center justify-center rounded-md bg-black text-white transition-colors duration-300 hover:bg-gray-700 disabled:cursor-not-allowed disabled:opacity-40 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2"
    >
      <MaterialIcon name="chevron_right" size={20} />
    </button>
  </div>
);