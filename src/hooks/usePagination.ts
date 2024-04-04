import { useState } from 'react'

export function usePagination(totalPages?: number) {
  const [page, setPage] = useState(1)

  function goToNextPage() {
    setPage(page + 1)
  }

  function goToPreviousPage() {
    setPage(page - 1)
  }

  function goToFirstPage() {
    setPage(1)
  }

  function goToLastPage() {
    if (totalPages) {
      setPage(totalPages)
    }
  }

  return {
    page,
    goToNextPage,
    goToPreviousPage,
    goToFirstPage,
    goToLastPage,
  }
}
