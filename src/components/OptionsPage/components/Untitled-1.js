import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Input from '@material-ui/core/Input';
import Css from './Css';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';



const classes = useStyles();
  const [data, setData] = useState([]);

  const [selected, setSelected] = useState([]);
  const [toggle, setToggle] = useState(true);
  const ref = useRef(true);

  const handleRequestSort = (event, property) => {
    const isDesc = orderBy === property && order === 'desc';
    setOrder(isDesc ? 'asc' : 'desc');
    setOrderBy(property);
    setData(data => [...data].reverse());
    console.log('reverse');
  };

  useEffect(
    _ => {
      if (dataAll && dataAll[domain]) {
        let { sty, def, mid } = dataAll[domain];
        const i = Object.values(dataAll[domain]).reduce((acc, v) => (v.length > acc ? (acc = v.length) : acc), 0);
        const rows = [...Array(i)].map((v, i) => createData(sty[i] || '', def[i] || '', mid[i] || '', i));
        setData(rows);
        // console.log(rows);
      }
    },
    [domain, dataAll]
  );

  useEffect(
    _ => {
      if (ref.current) {
        ref.current = false;
        return;
      }
      !data.length && chrome.storage.sync.remove(domain);
      console.log('之后', data);
      debounce(domain, data);
    },
    [data]
  );

  const handleSelectAllClick = event => {
    console.log('event.target.checked', event.target.checked);
    if (event.target.checked) {
      const newSelecteds = data.map(n => n.id);
      console.log(newSelecteds);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    selected.includes(name) ? setSelected(selected.filter(v => v !== name)) : setSelected(selected.concat(name));
  };

  const isSelected = name => selected.indexOf(name) !== -1;

  const remove = _ => {
    setData(data => data.filter(v => !selected.includes(v.id)));
    setSelected([]);
  };

  const add = _ => {
    const a = createData(undefined, undefined, undefined, Date.now());
    setData(data => data.concat(a));
  };
  const edit = (field, row) => e => {
    const val = e.target.value;
    const newRow = { ...row, [field]: val };
    setData(data => data.map(v => (v === row ? newRow : v)));
    console.log('是否重复 => ', data.map(v => v[field]).includes(val));
  };




  const debounce = (_ => {
    let time = null;
    return (domain, data) => {
      clearTimeout(time);
      time = setTimeout(() => {
        const fn = (sty, def, mid) => ({ sty, def, mid });
        let arr = ['sty', 'def', 'mid'].map(name => data.reduce((acc, v) => (v[name] ? acc.concat(v[name]) : acc), []));
        // arr = arr.map(v => [...new Set(v)]);
        // console.log(arr);
        let result = fn(...arr);
        console.log('result', { [domain]: result });
        chrome.storage.sync.set({ [domain]: result });
      }, 500);
    };
  })();




    {/*   {toggle ? (
          <Table className={classes.table} size='medium'> </Table>
        ) : (
          <Css domain={domain} dataAll={dataAll} />
        )} */}
