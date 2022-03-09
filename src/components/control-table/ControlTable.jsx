import * as React from 'react';
import './ControlTable.scss';
// import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Chip, Slider } from '@mui/material';
import { Line } from 'react-chartjs-2';

//firebase
import { ref, onValue } from 'firebase/database';
import { db } from '../../firebase';

const ControlTable = () => {
  const [currentValue, setCurrentValue] = React.useState({
    temperature: 70,
    moisture: 85,
    lightIntensity: 60,
    waterTemperature: 70,
    ph: 4.9,
    ec: 2,
    snprikleRelay: 1,
  });

  React.useEffect(() => {
    onValue(ref(db), (snapshot) => {
      // setCurrentValue({...currentValue,moisture:0});
      const data = snapshot.val();
      if (data !== null) {
        console.log('received data', data);
        setCurrentValue({
          ...currentValue,
          moisture: data.moistureData.moisture,
        });
      }
    });
  }, []);

  const handleChange = (event, name, newValue) => {
    setCurrentValue({ ...currentValue, [name]: newValue });
    console.log();
  };
  const optimise = (name, newValue) => {
    setCurrentValue({ ...currentValue, [name]: newValue });
  };
  const createData = (name, value, status, control, actions) => {
    if (name === 'Temperature') {
      let status;
      let statusColor = 'success';
      if (currentValue.temperature >= 65 && currentValue.temperature <= 80) {
        status = 'Good';
        statusColor = 'success';
      } else if (currentValue.temperature > 80) {
        status = 'High';
        statusColor = 'error';
      } else if (currentValue.temperature < 65) {
        status = 'Low';
        statusColor = 'error';
      }
      return {
        name,
        currentValue: `${currentValue.temperature}° F`,
        status: <Chip label={status} color={statusColor} />,
        control: (
          <Slider
            aria-label='temperature'
            value={currentValue.temperature}
            onChange={(e, newValue) => handleChange(e, 'temperature', newValue)}
          />
        ),
        actions: (
          <button
            className='filled'
            onClick={() => optimise('temperature', 70)}
          >
            Optimise
          </button>
        ),
        description: (
          <p>
            To keep plants thriving, the nutrient solution and water solvent
            must be kept at proper temperatures. Experts agree that the best
            water solution temperature for hydroponics is between 65°F and 80°F.
            This temperature range provides an ideal setting for healthy roots
            and optimal nutrient absorption. To get a bit more technical, when
            water reservoir temperatures (also known as root zone temperatures)
            are between 65°F and 80°F, high levels of dissolved oxygen are
            available at the root zone. Additionally, these ideal temperatures
            encourage plant disease suppression.
          </p>
        ),
        chart: (
          <Line
            width={800}
            data={{
              labels: ['10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3PM'],
              datasets: [
                {
                  label: 'Temperature',
                  data: [25, 23, 25, 22, 16, 28],
                  fill: false,
                  borderColor: '#FC525F',
                  tension: 0.1,
                },
              ],
            }}
          />
        ),
      };
    } else if (name === 'Moisture') {
      let status;
      let statusColor = 'success';
      if (currentValue.moisture >= 60 && currentValue.moisture <= 70) {
        status = 'Good';
        statusColor = 'success';
      } else if (currentValue.moisture > 70) {
        status = 'High';
        statusColor = 'error';
      } else if (currentValue.moisture < 50) {
        status = 'Low';
        statusColor = 'error';
      }
      return {
        name,
        currentValue: `${currentValue.moisture}%`,
        status: <Chip label={status} color={statusColor} />,
        control: '- -',
        actions: (
          <button className='filled' onClick={() => optimise('moisture', 65)}>
            Optimise
          </button>
        ),
        description: (
          <p>
            you can start around 60-70% humidity and gradually reduce it to
            around 40% humidity as your plants mature … That's because as the
            plants go through vegetation and bloom phase, they can evaporate
            more & the temperature may increase to a maximum of 82ºF (28ºC).
          </p>
        ),
        chart: (
          <Line
            width={800}
            data={{
              labels: ['10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3PM'],
              datasets: [
                {
                  label: 'Moisture',
                  data: [65, 70, 60, 66, 72, 75],
                  fill: false,
                  borderColor: '#544179',
                  tension: 0.1,
                },
              ],
            }}
          />
        ),
      };
    } else if (name === 'Light Intensity') {
      let status;
      let statusColor = 'success';
      if (
        currentValue.lightIntensity > 40 &&
        currentValue.lightIntensity <= 60
      ) {
        status = 'Good';
        statusColor = 'success';
      } else if (currentValue.lightIntensity >= 60) {
        status = 'High';
        statusColor = 'error';
      } else if (currentValue.lightIntensity <= 30) {
        status = 'Low';
        statusColor = 'error';
      }
      return {
        name,
        currentValue: `${currentValue.lightIntensity}%`,
        status: <Chip label={status} color={statusColor} />,
        control: (
          <Slider
            aria-label='temperature'
            value={currentValue.lightIntensity}
            onChange={(e, newValue) =>
              handleChange(e, 'lightIntensity', newValue)
            }
          />
        ),
        actions: (
          <button
            className='filled'
            onClick={() => optimise('lightIntensity', 50)}
          >
            Optimise
          </button>
        ),
        description: (
          <p>
            With artificial lighting in your hydroponic garden, the main goal is
            to imitate this. You should plan your system on having at least 14
            to 16 hours of bright artificial light, followed by 10 to 12 hours
            of darkness every day. The darkness is just as important as the
            light—just like animals, plants need time to rest and metabolize.
          </p>
        ),
        chart: (
          <Line
            width={800}
            data={{
              labels: ['10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3PM'],
              datasets: [
                {
                  label: 'Light Intensity',
                  data: [40, 45, 48, 50, 53, 50],
                  fill: false,
                  borderColor: '#E5890A',
                  tension: 0.1,
                },
              ],
            }}
          />
        ),
      };
    } else if (name === 'Water Temperature') {
      let status;
      let statusColor = 'success';
      if (
        currentValue.waterTemperature > 65 &&
        currentValue.waterTemperature <= 80
      ) {
        status = 'Good';
        statusColor = 'success';
      } else if (currentValue.waterTemperature > 80) {
        status = 'High';
      } else if (currentValue.waterTemperature < 65) {
        currentValue.waterTemperature = 'Low';
      }
      return {
        name,
        currentValue: `${currentValue.waterTemperature}%`,
        status: <Chip label={status} color={statusColor} />,
        control: '- -',
        actions: (
          <button
            className='filled'
            onClick={() => optimise('waterTemperature', 70)}
          >
            Optimise
          </button>
        ),
        description: (
          <p>
            To keep plants thriving, the nutrient solution and water solvent
            must be kept at proper temperatures. In all systems, hydroponic
            water temperature is critical. The ideal water temperature for
            hydroponics is between 65 and 80 degrees Fahrenheit (18 to 26 C.)
          </p>
        ),
        chart: (
          <Line
            width={800}
            data={{
              labels: ['10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3PM'],
              datasets: [
                {
                  label: 'Water Temperature',
                  data: [65, 67, 72, 68, 75, 75],
                  fill: false,
                  borderColor: '#2F86A6',
                  tension: 0.1,
                },
              ],
            }}
          />
        ),
      };
    } else if (name === 'PH') {
      let status = 'Good';
      let statusColor = 'success';
      if (currentValue.ph >= 5 && currentValue.ph <= 6) {
        status = 'Good';
        statusColor = 'success';
      } else if (currentValue.ph > 6) {
        status = 'High';
      } else if (currentValue.ph < 5) {
        status = 'Low';
        statusColor = 'error';
      }
      return {
        name,
        currentValue: `${currentValue.ph}`,
        status: <Chip label={status} color={statusColor} />,
        control: '- -',
        actions: (
          <button className='filled' onClick={() => optimise('ph', 5.5)}>
            Optimise
          </button>
        ),
        description: (
          <p>
            pH is a measure of how acidic or basic the solution is at the time
            of reading. The range goes from 0 to 14, with 7 being neutral. The
            pH of a nutrient solution influences the availability of nutrients,
            so it should be maintained in the optimum range. Nutrient solutions
            used for soilless culture should have a pH between 5 to 6 (usually
            5.5), so the pH in the root environment is maintained between 6 to
            6.5. This is the pH range at which nutrients are most readily
            available to plants.
          </p>
        ),
        chart: (
          <Line
            width={800}
            data={{
              labels: ['10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3PM'],
              datasets: [
                {
                  label: 'PH',
                  data: [5, 5.2, 5.3, 5.5, 5, 4.9],
                  fill: false,
                  borderColor: '#1F1D36',
                  tension: 0.1,
                },
              ],
            }}
          />
        ),
      };
    } else if (name === 'EC') {
      let status = 'Good';
      let statusColor = 'success';
      if (currentValue.ec >= 1.5 && currentValue.ec <= 2.5) {
        status = 'Good';
        statusColor = 'success';
      } else if (currentValue.ec > 2.5) {
        status = 'High';
      } else if (currentValue.ec < 1.5) {
        status = 'Low';
        statusColor = 'error';
      }
      return {
        name,
        currentValue: `${currentValue.ec} dS/m`,
        status: <Chip label={status} color={statusColor} />,
        control: '- -',
        actions: (
          <button className='filled' onClick={() => optimise('ec', 2)}>
            Optimise
          </button>
        ),
        description: (
          <p>
            For most hydroponic crops, the ideal range of EC for most crops is
            between 1.5 and 2.5 dS/m. A higher EC could prevent the plant from
            absorbing nutrients due to increased (more negative) osmotic
            pressure, and EC levels that are too low could adversely impact
            yield.
          </p>
        ),
        chart: (
          <Line
            width={800}
            data={{
              labels: ['10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3PM'],
              datasets: [
                {
                  label: 'EC',
                  data: [1.7, 1.7, 1.9, 2.2, 2.4, 2],
                  fill: false,
                  borderColor: '#630000',
                  tension: 0.1,
                },
              ],
            }}
          />
        ),
      };
    } else if (name === 'Relay (Sprinkle)') {
      let status = 'OFF';
      let statusColor = 'error';
      if (currentValue.sprinkleRelay === 1) {
        status = 'ON';
        statusColor = 'success';
      } else if (currentValue.sprinkleRelay === 0) {
        status = 'OFF';
        statusColor = 'error';
      }
      return {
        name,
        currentValue: `${currentValue}`,
        status: <Chip label={status} color={statusColor} />,
        control: '- -',
        actions: (
          <button
            className='filled'
            onClick={() => optimise('sprinkleRelay', 0)}
          >
            Turn OFF
          </button>
        ),
        description: (
          <p>
            The relay connected with the sprinklers that turn on the water
            supplies to the farming space. You can turn ON/OFF the relay to
            operate between the states
          </p>
        ),
        chart: (
          <Line
            width={800}
            data={{
              labels: ['10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3PM'],
              datasets: [
                {
                  label: 'Relay (Sprinkle)',
                  data: [0, 0, 0, 1, 0, 1],
                  fill: false,
                  borderColor: '#FF5151',
                  tension: 0.1,
                },
              ],
            }}
          />
        ),
      };
    } else {
      return {
        name,
        currentValue,
        status: <Chip label='Chip Filled' />,
        control,
        actions,
        history: [
          {
            date: '2020-01-05',
            customerId: '11091700',
            amount: 3,
          },
          {
            date: '2020-01-02',
            customerId: 'Anonymous',
            amount: 1,
          },
        ],
      };
    }
  };

  function Row(props) {
    const { row } = props;
    const [open, setOpen] = React.useState(false);

    return (
      <React.Fragment>
        <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
          <TableCell>
            <IconButton
              aria-label='expand row'
              size='small'
              onClick={() => setOpen(!open)}
            >
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          </TableCell>
          <TableCell scope='row'>{row.name}</TableCell>
          <TableCell align='center'>{row.currentValue}</TableCell>
          <TableCell align='center'>{row.status}</TableCell>
          <TableCell align='center'>{row.control}</TableCell>
          <TableCell align='center'>{row.actions}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
            <Collapse in={open} timeout='auto' unmountOnExit>
              <Box sx={{ margin: 1 }}>
                <Typography variant='h6' gutterBottom component='div'>
                  {row.name}
                </Typography>
                {row.description}
                <div className='mt-3'>{row.chart}</div>
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
      </React.Fragment>
    );
  }

  const rows = [
    createData('Temperature', 70),
    createData('Moisture', 85),
    createData('Light Intensity', 60),
    createData('Water Temperature', 70),
    createData('PH', 4.9),
    createData('EC', 2),
    createData('Relay (Sprinkle)', 1),

    // createData('Ultrasonic', 356, 16.0, 49, 3.9, 1.5),
    // createData('Relay (Cooling)', 356, 16.0, 49, 3.9, 1.5),
    // createData('Humidity', 356, 16.0, 49, 3.9, 1.5),
    // createData('Light', 356, 16.0, 49, 3.9, 1.5),
  ];
  return (
    <TableContainer component={Paper} className='control-table'>
      <Table aria-label='collapsible table'>
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Sensors</TableCell>
            <TableCell align='center'>Current Value</TableCell>
            <TableCell align='center'>Status</TableCell>
            <TableCell align='center'>Control</TableCell>
            <TableCell align='center'>Other Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default ControlTable;
