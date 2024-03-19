import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ErrorPage } from "./error.page";

import HomePageLayout from "./layouts";
import AdminLayout from "./layouts/admin.layout";
import AdminDashboard from "./admin/admin-dashboard.component";

import Fe from "./fe";

import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import SellerLayout from "./layouts/seller.layout";
import SellerDashboard from "./seller/dashboard.page";
import PrivateLayout from "../config/permission.service";
import { useDispatch } from "react-redux";
import { getLoggedInUser } from "../reducers/user.slicer";

import Banner from "./admin/banner";
import Brand from "./admin/brand";
import Category from "./admin/category";
import Products from "./admin/product";
import User from "./admin/user";

const Routing = () => {
    const dispatch = useDispatch();
    let token = localStorage.getItem("accessToken") ?? null;

    useEffect(() => {
        if (token) {
            dispatch(getLoggedInUser({ test: "Value" }))
        }
    }, [dispatch, token])
    return (<>
        <ToastContainer />
        <BrowserRouter>
            <Routes>

                <Route path="/" element={<HomePageLayout />}>
                    <Route index element={<Fe.HomePage />} />
                    <Route path="login" element={<Fe.Auth.LoginPage />} />
                    <Route path="register" element={<Fe.Auth.RegisterPage />} />
                    <Route path="/activate/:token" element={<Fe.Auth.ActivateUser />} />
                    <Route path="forgot-password" element={<Fe.Auth.ForgetPassword />} />
                    <Route path="category/:catSlug" element={<Fe.CategoryDetail />}></Route>
                    <Route path="*" element={<ErrorPage />} />
                </Route>

                {/* <Route path="/admin" element={<AdminLayout />}> */}
                <Route path="/admin" element={<PrivateLayout role="admin" component={<AdminLayout />} />}>
                    <Route index element={<AdminDashboard />} />

                    <Route path="banner" element={<Banner.BannerList />} />
                    <Route path="banner/create" element={<Banner.BannerCreate />} />
                    <Route path="banner/:id" element={<Banner.BannerEdit/>}/>
                    
                    <Route path="brand" element={<Brand.BrandList />} />
                    <Route path="brand/create" element={<Brand.BrandCreate />} />
                    <Route path="brand/:id" element={<Brand.BrandEdit/>}/>


                    <Route path="category" element={<Category.CategoryList />} />
                    <Route path="category/create" element={<Category.CategoryCreate />} />
                    <Route path="category/:id" element={<Category.CategoryEdit/>}/>

                    <Route path="products" element={<Products.ProductList />} />
                    <Route path="products/create" element={<Products.ProductCreate />} />

                    {/* TODO: User Management */}
                    <Route path="user" element={<User.UserList />} />
                    <Route path="user/create" element={<User.UserCreate />} />

                </Route>
                <Route path="/seller" element={<PrivateLayout role="seller" component={<SellerLayout />} />}>
                    <Route index element={<SellerDashboard />} />
                </Route>

                <Route path="/customer" element={<AdminLayout />}>
                    <Route index element={<AdminDashboard />} />

                </Route>
            </Routes>
        </BrowserRouter>

    </>)
}

export default Routing;