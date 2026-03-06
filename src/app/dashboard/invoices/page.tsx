import { getInvoices } from "../../../lib/invoices";
import InvoicesPage from "./invoices-page";

export default async function Page() {
    const invoices = await getInvoices();

    return <InvoicesPage invoices={invoices} />;
}
