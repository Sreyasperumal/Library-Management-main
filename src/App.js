import logo from './logo.svg';
import './App.css';
import "./CSS/style.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './Dashboard';
import Book_List from './Book_List';
import Login from './Login';
import PortalLayout from './PortalLayout';
import Add_Book from './Add_Book';
import Edit_Book from './Edit_Book';
import Issue_Form from './Issue_Form';
import Issue_List from './Issue_List';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="" element={<Login/>} />
      <Route path="/portal" element={<PortalLayout/>}>
        <Route path="dashboard" element={<Dashboard/>} />
        <Route path="book_list" element={<Book_List />} />
        <Route path="book_add" element={<Add_Book />} />
        <Route path="book_edit/:id" element={<Edit_Book />} />
        <Route path="book_issue" element={<Issue_Form />} />
        <Route path="issue_list" element={<Issue_List />} />
      </Route>
    </Routes>      
  </BrowserRouter>
  );
}

export default App;
