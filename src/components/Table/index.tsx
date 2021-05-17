import { TableHTMLAttributes, PropsWithChildren } from 'react';

import './styles.scss';

type TableProps = TableHTMLAttributes<HTMLTableElement> & {};

function Table({ className, children }: PropsWithChildren<TableProps>) {
  return (
    <div className="table-responsive">
      <table className={`table ${className}`}>{children}</table>
    </div>
  );
}

Table.TableHeader = function TableBody({
  className,
  children,
}: PropsWithChildren<TableProps>) {
  return <thead className={`table-header ${className}`}>{children}</thead>;
};

Table.TableBody = function TableBody({
  className,
  children,
}: PropsWithChildren<TableProps>) {
  return <tbody className={`table-body ${className}`}>{children}</tbody>;
};

Table.TableFooter = function TableFooter({
  className,
  children,
}: PropsWithChildren<TableProps>) {
  return <tfoot className={`table-footer ${className}`}>{children}</tfoot>;
};

Table.Tr = function Tr({ className, children }: PropsWithChildren<TableProps>) {
  return <tr className={`table-tr ${className}`}>{children}</tr>;
};

Table.Th = function Th({ className, children }: PropsWithChildren<TableProps>) {
  return <th className={`table-th ${className}`}>{children}</th>;
};

Table.Td = function Td({ className, children }: PropsWithChildren<TableProps>) {
  return <td className={`table-td ${className}`}>{children}</td>;
};

export { Table };
