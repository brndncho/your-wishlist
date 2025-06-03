import { Link, useResolvedPath } from "react-router-dom";
import { ShoppingCart, ScrollText, DollarSign, Sparkles } from "lucide-react";
import { useProductStore } from "../store/useProductStore";

function Navbar() {
  const { pathname } = useResolvedPath();
  const isHomePage = pathname === "/";

  const { products, total } = useProductStore();

  return (
    <div className="bg-base-100/80 backdrop-blur-lg border-b border-base-content/10 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto">
        <div className="navbar px-4 min-h-[4rem] justify-between">
          {/* LOGO */}
          <div className="flex-1 lg:flex-none">
            <Link to="/" className="hover:opacity-80 transition-opacity">
              <div className="flex items-center gap-2">
                <Sparkles className="size-9 text-primary" />
                <ScrollText className="size-9 text-primary" />
                <span
                  className="font-semibold font-roboto tracking-widest text-2xl 
                    bg-clip-text "
                >
                  Your Wishlist
                </span>
              </div>
            </Link>
          </div>

          {/* RIGHT SECTION */}
          <div className="flex items-center gap-4">

            {isHomePage && (
              <>
                <div class="tooltip tooltip-bottom" data-tip="Number of Products in List">
                  <div className="indicator">
                    <div className="p-2 rounded-full hover:bg-base-200 transition-colors">
                      <ShoppingCart className="size-5" />
                      <span className="badge badge-sm badge-primary indicator-item">
                        {products.length}
                      </span>
                    </div>
                  </div>
                </div>
                <div class="tooltip tooltip-bottom" data-tip="Total Amount in Dollars">
                  <div className="indicator">
                    <div className="p-2 rounded-full hover:bg-base-200 transition-colors">
                      <DollarSign className="size-5" />
                      <span className="badge badge-sm badge-primary indicator-item">
                        {total}
                      </span>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
