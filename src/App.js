import './App.css';
import Initials from "./Others/Initials";
import DayOfWeek from "./Others/DayOfWeek";
import Article from './Article/Article';
import Menu from './Menu/Menu';
import MenuItem from './Menu/MenuItem/MenuItem';
import CommentList from './Article/CommentList/CommentList';
import Comment from './Article/CommentList/Comment/Comment';
import Counter from './Others/Counter/Counter';
import StudentPicker from './Others/StudentPicker';
import RandomColorSquare from './RandomColorSquare/RandomColorSquare'

function App() {
  
  // function clickHandler() {
  //   console.log('You clicked!')
  // }
  
  return (
    <div >
      <RandomColorSquare />
      {/* <button onDoubleClick={clickHandler}>Print to the Console when you do a double click!</button> */}
      {/* <Counter /> */}
      {/* <StudentPicker /> */}
      {/* <Menu>
        <MenuItem>
          <a href="/">
            <img /> Homepage
          </a>
        </MenuItem>
        <MenuItem>
          <a href="/gallery">
            <img /> Gallery
          </a>
        </MenuItem>
        <MenuItem>
          <a href="/contant">
            <img /> Contant
          </a>
        </MenuItem>
      </Menu> */}
      {/* <Initials name="Rosie Mark" />
      <DayOfWeek day={3} /> */}
      {/* <Article>
        <CommentList>
            <Comment content={'Dan occasionally wins at Fortnite by hiding in a bush until the game ends.'} author={'Dan Abramov'} />
            <Comment content={'Brian takes care of the cutest cat in the world.'} author={'Brian Vaughn'} />
            <Comment content={'Andrew is either a Disney villain or a Disney princess, depending on the day.'} author={'Andrew Clark'} />
        </CommentList>
      </Article>  */}
      {/* title="React team" 
      content="React development is led by a small dedicated team working full time at Facebook. "/> */}
    </div>
  );
}

export default App;
