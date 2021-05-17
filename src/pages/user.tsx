import { Badge, Table, Link } from '@components';

function User() {
  return (
    <>
      <Table>
        <Table.TableHeader>
          <Table.Tr>
            <Table.Td className="color-dark">#</Table.Td>
            <Table.Td className="color-dark">E-mail</Table.Td>
            <Table.Td className="color-dark">Product Name</Table.Td>
            <Table.Td className="color-dark">Purchaser</Table.Td>
            <Table.Td className="color-dark">Payment</Table.Td>
            <Table.Td className="color-dark">Date</Table.Td>
            <Table.Td className="color-dark">Status</Table.Td>
            <Table.Td className="color-dark">Actions</Table.Td>
          </Table.Tr>
        </Table.TableHeader>
        <Table.TableBody>
          <Table.Tr>
            <Table.Td className="color-dark">
              <Link to="/" className="link-table" variant="underline">
                12345678
              </Link>
            </Table.Td>
            <Table.Td className="color-dark">email@gmail.com</Table.Td>
            <Table.Td className="color-dark">Product 1</Table.Td>
            <Table.Td className="color-dark">
              Marcos Renê Cavalcante Moura
            </Table.Td>
            <Table.Td className="color-dark">Credit card</Table.Td>
            <Table.Td className="color-dark">08/05/2021</Table.Td>
            <Table.Td className="color-dark">
              <Badge border="rounded-pill" type="warning">
                Waiting
              </Badge>
            </Table.Td>
            <Table.Td className="color-dark">Actions</Table.Td>
          </Table.Tr>
          <Table.Tr>
            <Table.Td className="color-dark">12345678</Table.Td>
            <Table.Td className="color-dark">email@gmail.com</Table.Td>
            <Table.Td className="color-dark">Product 1</Table.Td>
            <Table.Td className="color-dark">
              Marcos Renê Cavalcante Moura
            </Table.Td>
            <Table.Td className="color-dark">Credit card</Table.Td>
            <Table.Td className="color-dark">08/05/2021</Table.Td>
            <Table.Td className="color-dark">
              <Badge border="rounded-pill" type="success">
                Pay
              </Badge>
            </Table.Td>
            <Table.Td className="color-dark">Actions</Table.Td>
          </Table.Tr>
          <Table.Tr>
            <Table.Td className="color-dark">12345678</Table.Td>
            <Table.Td className="color-dark">email@gmail.com</Table.Td>
            <Table.Td className="color-dark">Product 1</Table.Td>
            <Table.Td className="color-dark">
              Marcos Renê Cavalcante Moura
            </Table.Td>
            <Table.Td className="color-dark">Credit card</Table.Td>
            <Table.Td className="color-dark">08/05/2021</Table.Td>
            <Table.Td className="color-dark">
              <Badge border="rounded-pill" type="error">
                Refused
              </Badge>
            </Table.Td>
            <Table.Td className="color-dark">Actions</Table.Td>
          </Table.Tr>
          <Table.Tr>
            <Table.Td className="color-dark">12345678</Table.Td>
            <Table.Td className="color-dark">email@gmail.com</Table.Td>
            <Table.Td className="color-dark">Product 1</Table.Td>
            <Table.Td className="color-dark">
              Marcos Renê Cavalcante Moura
            </Table.Td>
            <Table.Td className="color-dark">Credit card</Table.Td>
            <Table.Td className="color-dark">08/05/2021</Table.Td>
            <Table.Td className="color-dark">
              <Badge border="rounded-pill" type="dark">
                Reversed
              </Badge>
            </Table.Td>
            <Table.Td className="color-dark">Actions</Table.Td>
          </Table.Tr>
        </Table.TableBody>
      </Table>
    </>
  );
}

export default User;
