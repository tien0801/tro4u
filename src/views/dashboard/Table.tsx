// ** MUI Imports
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Chip from "@mui/material/Chip";
import Table from "@mui/material/Table";
import TableRow from "@mui/material/TableRow";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import Typography from "@mui/material/Typography";
import TableContainer from "@mui/material/TableContainer";

// ** Types Imports
import { ThemeColor } from "src/@core/layouts/types";
import {
  Avatar,
  Badge,
  Button,
  Grid,
  Link,
  Stack,
  TableFooter,
} from "@mui/material";

// Icons
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import GridViewIcon from "@mui/icons-material/GridView";
import AddHomeOutlinedIcon from "@mui/icons-material/AddHomeOutlined";
import EditIcon from "@mui/icons-material/Edit";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import Chart from "chart.js/auto";
import styles from "./table.module.scss";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { Centos } from "mdi-material-ui";

// ** Types Import
interface RowType {
  id: string;
  name: string;
  status?: any;
  dateCoc?: string;
  dateTra?: string;
  phone: string;
  time: string;
  date: string;
  user: any;
  cash: string;
  price: string;
}

interface StatusObj {
  [key: string]: {
    color: ThemeColor;
  };
}

const rows: RowType[] = [
  {
    id: "A27",
    status: [
      {
        name: "Báo trả",
        date: "20/10",
      },
    ],
    time: "10/11/2023 - 20/11/2024",
    name: "Sally Quinn",
    cash: "1.195.000",
    price: "5.000.000",
    user: [
      {
        avatar: "/images/avatars/1.png",
        name: "User 1",
      },
      {
        avatar: "/images/avatars/2.png",
        name: "User 2",
      },
    ],
    phone: "0909090900",
    date: "09/27/2018",
  },
  {
    id: "A61",
    time: "10/11/2023 - 20/11/2024",
    cash: "1.238.000",
    price: "5.000.000",
    status: [
      {
        name: "Cho thuê",
        date: "20/10",
      },
    ],
    name: "Margaret Bowers",
    user: [
      {
        avatar: "/images/avatars/1.png",
        name: "User 1",
      },
      {
        avatar: "/images/avatars/2.png",
        name: "User 2",
      },
      {
        avatar: "/images/avatars/3.png",
        name: "User 3",
      },
    ],
    date: "09/23/2016",
    phone: "0909090900",
  },
  {
    id: "A59",
    time: "10/11/2023 - 20/11/2024",
    name: "Minnie Roy",
    status: [
      {
        name: "Đang trống",
        date: "20/10",
      },
    ],
    cash: "1.189.000",
    price: "5.000.000",
    user: [
      {
        avatar: "/images/avatars/1.png",
        name: "User 1",
      },
      {
        avatar: "/images/avatars/2.png",
        name: "User 2",
      },
      {
        avatar: "/images/avatars/4.png",
        name: "User 4",
      },
      {
        avatar: "/images/avatars/5.png",
        name: "User 5",
      },
    ],
    date: "10/15/2017",
    phone: "0909090900",
  },
  {
    id: "A30",
    time: "10/11/2023 - 20/11/2024",
    status: [
      {
        name: "Báo trả",
        date: "20/11",
      },
      {
        name: "Đang cọc",
        date: "10/10",
      },
    ],
    dateCoc: "20/10",
    dateTra: "20/10",
    cash: "1.192.000",
    price: "5.000.000",
    name: "Ralph Leonard",
    user: [
      {
        avatar: "/images/avatars/6.png",
        name: "User 2",
      },
    ],
    date: "06/12/2018",
    phone: "0909090900",
  },
  {
    id: "A66",
    status: [
      {
        name: "Đang cọc",
        date: "20/10",
      },
    ],
    dateCoc: "12/9",
    time: "10/11/2023 - 20/11/2024",
    cash: "1.130.000",
    price: "5.000.000",
    name: "Annie Martin",
    phone: "0909090900",
    user: [
      {
        avatar: "/images/avatars/2.png",
        name: "User 1",
      },
    ],
    date: "03/24/2018",
  },
  {
    id: "A33",
    time: "10/11/2023 - 20/11/2024",
    cash: "1.109.000",
    price: "5.000.000",
    name: "Adeline Day",
    status: [
      {
        name: "Cho thuê",
        date: "20/10",
      },
    ],
    user: [
      {
        avatar: "/images/avatars/7.png",
        name: "User 1",
      },
      {
        avatar: "/images/avatars/8.png",
        name: "User 1",
      },
    ],
    date: "08/25/2017",
    phone: "0909090900",
  },
  {
    id: "A61",
    status: [
      {
        name: "Báo trả",
        date: "20/10",
      },
    ],
    time: "10/11/2023 - 20/11/2024",
    cash: "1.178.000",
    price: "5.000.000",
    name: "Lora Jackson",
    phone: "0909090900",
    user: [
      {
        avatar: "/images/avatars/3.png",
        name: "User 1",
      },
      {
        avatar: "/images/avatars/2.png",
        name: "User 2",
      },
    ],
    date: "06/01/2017",
  },
  {
    id: "A22",
    time: "10/11/2023 - 20/11/2024",
    cash: "1.123.000",
    price: "5.000.000",
    name: "Rodney Sharp",
    status: [
      {
        name: "Cho thuê",
        date: "20/10",
      },
    ],
    phone: "0909090900",
    date: "12/03/2017",
    user: [
      {
        avatar: "/images/avatars/7.png",
        name: "User 1",
      },
      {
        avatar: "/images/avatars/2.png",
        name: "User 2",
      },
    ],
  },
  {
    id: "A22",
    time: "10/11/2023 - 20/11/2024",
    cash: "1.123.000",
    price: "5.000.000",
    name: "Rodney Sharp",
    status: [
      {
        name: "Cho thuê",
        date: "20/10",
      },
    ],
    phone: "0909090900",
    date: "12/03/2017",
    user: [
      {
        avatar: "/images/avatars/1.png",
        name: "User 1",
      },
      {
        avatar: "/images/avatars/2.png",
        name: "User 2",
      },
    ],
  },
  {
    id: "A22",
    time: "10/11/2023 - 20/11/2024",
    cash: "1.123.000",
    price: "5.000.000",
    name: "Rodney Sharp",
    status: [
      {
        name: "Cho thuê",
        date: "20/10",
      },
    ],
    phone: "0909090900",
    date: "12/03/2017",
    user: [
      {
        avatar: "/images/avatars/1.png",
        name: "User 1",
      },
      {
        avatar: "/images/avatars/2.png",
        name: "User 2",
      },
    ],
  },
];

const statusObj: StatusObj = {
  "Đang trống": { color: "error" },
  "Đang cọc": { color: "info" },
  "Cho thuê": { color: "success" },
  "Báo trả": { color: "primary" },
  "Báo trả có cọc": { color: "warning" },
};

const data = {
  labels: ["Đang trống", "Đang cọc", "Cho thuê", "Báo trả", "Báo trả có cọc"],
  datasets: [
    {
      label: "Số phòng",
      data: [40, 20, 30, 10, 25],
      backgroundColor: [
        "rgba(255, 76, 81, 0.8)",
        "rgba(22, 177, 255, 0.8)",
        "rgba(86, 202, 0, 0.8)",
        "rgba(145, 85, 253, 0.8)",
        "rgba(255, 180, 0, 0.8)",
      ],
      borderColor: [
        "rgba(255, 76, 81, 1)",
        "rgba(22, 177, 255, 1)",
        "rgba(86, 202, 0, 1)",
        "rgba(145, 85, 253, 1)",
        "rgba(255, 180, 0, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

ChartJS.register(ArcElement, Tooltip, Legend);

const DashboardTable = () => {
  return (
    <Card>
      <Grid container spacing={2} rowGap={3} className={styles.topTable}>
        <Grid item xs={12} sm={6} className={styles.boxLeft}>
          <Typography variant="h6" style={{ textAlign: "left" }}>
            Tổng quan
          </Typography>
          <Box>
            <Pie
              data={data}
              width={200}
              height={200}
              options={{ maintainAspectRatio: false }}
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} className={styles.boxRight}>
          <Stack spacing={2} direction="row" className={styles.listButton}>
            <Button variant="outlined" startIcon={<EditIcon />}>
              Sửa nhà
            </Button>
            <Button variant="contained" startIcon={<AddHomeOutlinedIcon />}>
              Thêm Phòng
            </Button>
          </Stack>
        </Grid>
      </Grid>

      <TableContainer sx={{ maxHeight: 640 }}>
        <Table
          stickyHeader
          sx={{ minWidth: 800 }}
          aria-label="table in dashboard"
        >
          <TableHead>
            <TableRow>
              <TableCell
                style={{ whiteSpace: "nowrap" }}
                className={styles.stickyColumn}
              >
                Mã phòng
              </TableCell>
              <TableCell style={{ whiteSpace: "nowrap" }}>Khách thuê</TableCell>
              <TableCell style={{ whiteSpace: "nowrap" }}>Điện thoại</TableCell>
              <TableCell style={{ whiteSpace: "nowrap" }}>Tình trạng</TableCell>
              <TableCell style={{ whiteSpace: "nowrap" }}>
                Thời gian hợp đồng
              </TableCell>
              <TableCell style={{ whiteSpace: "nowrap" }}>Tiền cọc</TableCell>
              <TableCell style={{ whiteSpace: "nowrap" }}>Giá thuê</TableCell>
              <TableCell style={{ whiteSpace: "nowrap" }}>
                Ngày thanh toán
              </TableCell>
              <TableCell style={{ whiteSpace: "nowrap" }}></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row: RowType) => (
              <TableRow
                hover
                key={row.id}
                sx={{ "&:last-of-type td, &:last-of-type th": { border: 0 } }}
              >
                <TableCell
                  style={{
                    color: "#000",
                    backgroundColor: `${
                      row.status[0].name == "Đang trống"
                        ? "rgba(255, 76, 81, 1)"
                        : row.status[0].name == "Đang cọc"
                        ? "rgba(22, 177, 255, 1)"
                        : row.status[0].name == "Cho thuê"
                        ? "rgba(86, 202, 0, 1)"
                        : row.status[0].name == "Báo trả"
                        ? "rgba(145, 85, 253, 1)"
                        : "initial"
                    }`,
                    backgroundImage: `${
                      row.status[0].name == "Báo trả" &&
                      row.status[1]?.name == "Đang cọc"
                        ? "linear-gradient(to bottom , rgba(145, 85, 253, .7), rgba(22, 177, 255, .7))"
                        : "initial"
                    }`,
                  }}
                  className={styles.stickyColumn}
                >
                  {row.id}
                </TableCell>
                <TableCell>
                  {row.user ? (
                    <Stack direction="row" spacing={2}>
                      {row.user.map((items: any) => (
                        <Avatar
                          alt={items.name}
                          sx={{ width: 38, height: 38 }}
                          src={items.avatar}
                        />
                      ))}
                    </Stack>
                  ) : (
                    ""
                  )}
                </TableCell>
                <TableCell>{row.phone}</TableCell>
                <TableCell>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 1,
                      alignItems: "flex-start",
                    }}
                  >
                    {row.status.map((item: any) => (
                      <Chip
                        label={`${item.name}${
                          row.dateCoc ? `: ${row.dateCoc}` : ""
                        }`}
                        color={statusObj[item.name].color}
                        sx={{
                          height: 24,
                          fontSize: "0.75rem",
                          textTransform: "capitalize",
                          "& .MuiChip-label": { fontWeight: 500 },
                        }}
                      />
                    ))}
                  </Box>
                </TableCell>
                <TableCell>{row.time}</TableCell>
                <TableCell>{row.cash}</TableCell>
                <TableCell>{row.price}</TableCell>
                <TableCell>{row.date}</TableCell>
                <TableCell>
                  <MoreVertIcon />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter sx={{ bgcolor: "rgba(0,0,0,.05)" }}>
            <TableRow>
              <TableCell colSpan={2} style={{ fontSize: "1rem" }}>
                Tổng $ cọc: <strong className="color-main">20.000.000</strong>
              </TableCell>
              <TableCell colSpan={2} style={{ fontSize: "1rem" }}>
                Tổng $ thuê: <strong className="color-main">40.000.000</strong>
              </TableCell>
              <TableCell colSpan={2} style={{ fontSize: "1rem" }}>
                Tổng khách thuê: <strong className="color-main">40</strong>
              </TableCell>
              <TableCell colSpan={3} style={{ fontSize: "1rem" }}>
                Tổng xe: <strong className="color-main">10</strong>
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </Card>
  );
};

export default DashboardTable;
