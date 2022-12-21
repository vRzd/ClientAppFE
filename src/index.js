import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import MathOperation from "./pages/MathOperation";
import ItemOperation from "./pages/ItemOperation";
import ItemForm from "./pages/ItemForm";
import StringOperation from "./pages/StringOperation";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="about" element={<About />} />
                    <Route path="item" element={<ItemOperation />} />
                    <Route path="item/create" element={<ItemForm />} />
                    <Route path="math/operation" element={<MathOperation />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="string/operation" element={<StringOperation />} />
                    <Route path="*" element={<NoPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);