import React from "react";
import { Route } from "react-router-dom";
import { ProductsLoadingDialog } from "./products-loading-dialog/ProductsLoadingDialog";
import { ProductDeleteDialog } from "./product-delete-dialog/ProductDeleteDialog";
import { ProductsDeleteDialog } from "./products-delete-dialog/ProductsDeleteDialog";
import { ProductsFetchDialog } from "./products-fetch-dialog/ProductsFetchDialog";
import { ProductsUpdateStatusDialog } from "./products-update-status-dialog/ProductsUpdateStatusDialog";
import { ProductsCard } from "./ProductsCard";
import { ProductsUIProvider } from "./ProductsUIContext";

export function ProductsPage({ history }) {
  const productsUIEvents = {
    newProductButtonClick: () => {
      history.push("/crm/users/new");
    },
    openEditProductPage: (id) => {
      history.push(`/crm/users/${id}/edit`);
    },
    openDeleteProductDialog: (id) => {
      history.push(`/crm/users/${id}/delete`);
    },
    openDeleteProductsDialog: () => {
      history.push(`/crm/users/deleteProducts`);
    },
    openFetchProductsDialog: () => {
      history.push(`/crm/users/fetch`);
    },
    openUpdateProductsStatusDialog: () => {
      history.push("/crm/users/updateStatus");
    },
  };

  return (
    <ProductsUIProvider productsUIEvents={productsUIEvents}>
      <ProductsLoadingDialog />
      <Route path="/crm/users/deleteProducts">
        {({ history, match }) => (
          <ProductsDeleteDialog
            show={match != null}
            onHide={() => {
              history.push("/crm/users");
            }}
          />
        )}
      </Route>
      <Route path="/crm/users/:id/delete">
        {({ history, match }) => (
          <ProductDeleteDialog
            show={match != null}
            id={match && match.params.id}
            onHide={() => {
              history.push("/crm/users");
            }}
          />
        )}
      </Route>
      <Route path="/crm/users/fetch">
        {({ history, match }) => (
          <ProductsFetchDialog
            show={match != null}
            onHide={() => {
              history.push("/crm/users");
            }}
          />
        )}
      </Route>
      <Route path="/crm/users/updateStatus">
        {({ history, match }) => (
          <ProductsUpdateStatusDialog
            show={match != null}
            onHide={() => {
              history.push("/crm/users");
            }}
          />
        )}
      </Route>
      <ProductsCard />
    </ProductsUIProvider>
  );
}
