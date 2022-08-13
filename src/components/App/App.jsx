import AppHeader from "../AppHeader"
import PostAddForm from "../PostAddForm/PostAddForm"
import PostList from "../PostList/PostList"
import PostStatusFilter from "../PostStatusFilter/PostStatusFilter"
import SearchPanel from "../SearchPanel"
import './App.css'

const App = () => {
  return(
      <div className="app">
        <AppHeader/>
        <div className="search-panel d-flex">
            <SearchPanel/>
            <PostStatusFilter/>
        </div>
        <PostList/>
        <PostAddForm/>
      </div>
  )
}
export default App