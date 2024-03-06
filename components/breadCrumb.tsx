import { ChevronsRight } from "lucide-react";
import Link from "next/link";
interface BreadcrumbProps {
  pageName: string;
}
const Breadcrumb = ({ pageName }: BreadcrumbProps) => {
  return (
    <div className="flex lg:pl-14 ml-4 pt-4">
      <nav>
        <ol className="flex items-center gap-2">
          <li>
            <Link className="text-sm text-[#3E5765] flex" href="#">
              Cryptocurrencies
              <ChevronsRight className="w-5 h-5" />
            </Link>
          </li>
          <li className="text-sm text-[#0F1629] font-medium -ml-2">
            {pageName}
          </li>
        </ol>
      </nav>
    </div>
  );
};

export default Breadcrumb;
