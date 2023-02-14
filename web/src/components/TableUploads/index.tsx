import useTable from "@/hooks/useTable";
import { IUpload } from "@/interfaces/IUpload";
import { useState } from "react";
import { IconButton } from "../IconButton";
import TableFooter from "./TableFooter"

interface TableProps {
  data: IUpload[];
  rowsPerPage: number;
}

export const TableUploads = ({ data, rowsPerPage }: TableProps) => {
  const [page, setPage] = useState(1);
  const { slice, range } = useTable(data, page, rowsPerPage);
  return (
    <>
      <div className="overflow-x-auto relative rounded-md">
        <table className="w-full text-md text-center text-white">
          <thead className="text-lg bg-gray-700 text-white">
            <tr>
              <th className="py-3 px-6"></th>
              <th className="py-3 px-6">Código</th>
              <th className="py-3 px-6">Nome</th>
              <th className="py-3 px-6">CNPJ</th>
              <th className="py-3 px-6">Email</th>
              <th className="py-3 px-6">Telefone</th>
              <th className="py-3 px-6">Endereço</th>
            </tr>
          </thead>
          <tbody>
            {slice.map((el) => (
              <tr key={el.id} className="border-b bg-black border-gray-700">
                <td className="py-4 px-6 font-medium whitespace-nowrap text-white">
                  {/* <IconButton onClick={() => handleEditCompany(el.id)}>
                    <BiPencil />
                  </IconButton>
                  <IconButton
                    className="ml-2 hover:bg-red-500"
                    onClick={() => handleDeleteCompany(el.id)}
                  >
                    <BiTrash />
                  </IconButton> */}
                </td>
                <td className="py-4 px-6 font-medium whitespace-nowrap text-white">
                  {/* {el.code} */}
                </td>
                <td className="py-4 px-6 font-medium whitespace-nowrap text-white">
                  {/* {el.name} */}
                </td>
                <td className="py-4 px-6 font-medium whitespace-nowrap text-gray-400">
                  {/* {setMaskCnpj(el.cnpj)} */}
                </td>
                <td className="py-4 px-6 font-medium whitespace-nowrap text-gray-400">
                  {/* {el.email} */}
                </td>
                <td className="py-4 px-6 font-medium whitespace-nowrap text-gray-400">
                  {/* {setMaskPhone(el.phone)} */}
                </td>
                <td className="py-4 px-6 font-medium whitespace-nowrap text-gray-400">
                  {/* {el.address} */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <TableFooter range={range} slice={slice} setPage={setPage} page={page} />
    </>
  )
}