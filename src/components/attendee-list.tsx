import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, MoreHorizontal, Search } from "lucide-react";

export function AttendeeList() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-3 items-center">
        <h1 className="text-2xl font-bold">Participantes</h1>

        <div className="border border-white/10 rounded-lg py-1.5 px-3  w-72 flex items-center gap-3">
          <Search className="size-4 text-emerald-300"/>
          <input type="text" placeholder="Buscar participante..." className="bg-transparent flex-1 outline-none p-0 text-sm ring-0 border-none" />
        </div>
      </div>

      <div className="border border-white/10 rounded-lg">
        <table className="w-full">
          <thead>
            <tr className="border-b border-white/10">
              <th style={{ width: 48 }} className="py-3 px-4 text-sm font-semibold text-left">
                <input type="checkbox" className="bg-black/20 rounded size-4" />
              </th>
              <th className="py-3 px-4 text-sm font-semibold text-left">Código</th>
              <th className="py-3 px-4 text-sm font-semibold text-left">Participante</th>
              <th className="py-3 px-4 text-sm font-semibold text-left">Data da inscrição</th>
              <th className="py-3 px-4 text-sm font-semibold text-left">Data da check-in</th>
              <th style={{ width: 68 }} className="py-3 px-4 text-sm font-semibold text-left"></th>
            </tr>
          </thead>

          <tbody>
            {Array.from({ length: 10 }).map((_, index) => (
              <tr key={index} className="border-b border-white/10">
                <td className="py-3 px-4 text-sm text-zinc-300">
                  <input type="checkbox" className="bg-black/20 rounded size-4" />
                </td>
                <td className="py-3 px-4 text-sm text-zinc-300">123456</td>
                <td className="py-3 px-4 text-sm text-zinc-300">
                  <div className="flex flex-col gap-1">
                    <span className="font-semibold text-white">Daniel Guimaraes Vieira</span>
                    <span>danGuimaraes@gmail.com</span>
                  </div>
                </td>
                <td className="py-3 px-4 text-sm text-zinc-300">7 dias atrás</td>
                <td className="py-3 px-4 text-sm text-zinc-300">7 dias atrás</td>
                <td className="py-3 px-4 text-sm text-zinc-300">
                  <button className="bg-black/20 border border-white/10 rounded-md p-1.5">
                    <MoreHorizontal className="size-4"/>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>

          <tfoot>
            <tr>
              <td colSpan={3} className="py-3 px-4 text-sm text-zinc-300">Mostrando 10 de 228 itens</td>
              <td colSpan={3} className="py-3 px-4 text-sm text-zinc-300 text-right">
                <div className="inline-flex items-center gap-8">
                  <span>Página 1 de 11</span>
                  
                  <div className="flex items-center gap-1.5">
                    <button className="bg-black/20 border border-white/10 rounded-md p-1.5">
                      <ChevronsLeft  className="size-4"/>
                    </button>
                    <button className="bg-black/20 border border-white/10 rounded-md p-1.5">
                      <ChevronLeft className="size-4"/>
                    </button>
                    <button className="bg-black/20 border border-white/10 rounded-md p-1.5">
                      <ChevronRight  className="size-4"/>
                    </button>
                    <button className="bg-black/20 border border-white/10 rounded-md p-1.5">
                      <ChevronsRight  className="size-4"/>
                    </button>
                  </div>
                </div>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  )
}