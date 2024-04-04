import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  MoreHorizontal,
  Search,
} from 'lucide-react'

import { attendees } from '../data/attendees'

import { dateFormatter } from '../utils/functions'

import { usePagination } from '../hooks/usePagination'

import { Table } from './table/table'
import { IconButton } from './icon-button'
import { TableRow } from './table/table-row'
import { TableCell } from './table/table-cell'
import { TableHeader } from './table/table-header'

export function AttendeeList() {
  const totalPages = Math.ceil(attendees.length / 10)

  const { goToFirstPage, goToLastPage, goToNextPage, goToPreviousPage, page } =
    usePagination(totalPages)

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-3 items-center">
        <h1 className="text-2xl font-bold">Participantes</h1>

        <div className="border border-white/10 rounded-lg py-1.5 px-3  w-72 flex items-center gap-3">
          <Search className="size-4 text-emerald-300" />
          <input
            type="text"
            placeholder="Buscar participante..."
            className="bg-transparent flex-1 outline-none p-0 text-sm ring-0 border-none"
          />
        </div>
      </div>

      <Table>
        <thead>
          <TableRow>
            <TableHeader style={{ width: 48 }}>
              <input type="checkbox" className="bg-black/20 rounded size-4" />
            </TableHeader>
            <TableHeader>Código</TableHeader>
            <TableHeader>Participante</TableHeader>
            <TableHeader>Data da inscrição</TableHeader>
            <TableHeader>Data da check-in</TableHeader>
            <TableHeader style={{ width: 68 }}></TableHeader>
          </TableRow>
        </thead>

        <tbody>
          {attendees.slice((page - 1) * 10, page * 10).map((attendee) => (
            <TableRow key={attendee.id}>
              <TableCell>
                <input type="checkbox" className="bg-black/20 rounded size-4" />
              </TableCell>
              <TableCell>{attendee.id}</TableCell>
              <TableCell>
                <div className="flex flex-col gap-1">
                  <span className="font-semibold text-white">
                    {attendee.name}
                  </span>
                  <span>{attendee.email}</span>
                </div>
              </TableCell>
              <TableCell>{dateFormatter(attendee.createdAt)}</TableCell>
              <TableCell>{dateFormatter(attendee.checkInAt)}</TableCell>
              <TableCell>
                <IconButton variant="outline">
                  <MoreHorizontal className="size-4" />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </tbody>

        <tfoot>
          <TableRow>
            <TableCell colSpan={3}>
              Mostrando {page * 10} de {attendees.length} participantes
            </TableCell>
            <TableCell colSpan={3} className="text-right">
              <div className="inline-flex items-center gap-8">
                <span>
                  Página {page} de {totalPages}
                </span>

                <div className="flex items-center gap-1.5">
                  <IconButton disabled={page === 1} onClick={goToFirstPage}>
                    <ChevronsLeft className="size-4" />
                  </IconButton>
                  <IconButton disabled={page === 1} onClick={goToPreviousPage}>
                    <ChevronLeft className="size-4" />
                  </IconButton>
                  <IconButton
                    disabled={page === totalPages}
                    onClick={goToNextPage}
                  >
                    <ChevronRight className="size-4" />
                  </IconButton>
                  <IconButton
                    disabled={page === totalPages}
                    onClick={goToLastPage}
                  >
                    <ChevronsRight className="size-4" />
                  </IconButton>
                </div>
              </div>
            </TableCell>
          </TableRow>
        </tfoot>
      </Table>
    </div>
  )
}
