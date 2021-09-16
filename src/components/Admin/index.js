import { Route } from 'react-router-dom';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import Dashboard from './Dashboard';
import Leads from './Leads';
import Lessons from './Lessons';
import Chops from './Chops';
import Fullz from './Fullz';
import Spoofing from './Spoofing';
import Tools from './Tools';
import Services from './Services';

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Navbar />
        <Route
          exact
          path='/admin/dashboard'
          component={Dashboard}
        />
        <Route
          exact
          path='/admin/lessons'
          component={Lessons}
        />
        <Route
          exact
          path='/admin/leads'
          component={Leads}
        />
        <Route
          exact
          path='/admin/chops'
          component={Chops}
        />
        <Route
          exact
          path='/admin/fullz'
          component={Fullz}
        />
        <Route
          exact
          path='/admin/spoofing'
          component={Spoofing}
        />
        <Route
          exact
          path='/admin/tools'
          component={Tools}
        />
        <Route
          exact
          path='/admin/services'
          component={Services}
        />
      </div>
    </div>
  );
}

export default App;
