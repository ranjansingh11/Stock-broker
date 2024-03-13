import IQueryBaseUpdate from './IQueryBaseUpdate';

interface IQueryUpdate extends IQueryBaseUpdate {
  first_name?: string;
  last_name?: string;
  email?: string;
  password?: string;
}

export default IQueryUpdate;
