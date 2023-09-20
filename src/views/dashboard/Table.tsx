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

interface RowType {
  id: string;
  name: string;
  status: string;
  deposit?: string;
  phone: string;
  time: string;
  date: string;
  avatar: string;
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
    status: "Báo trả",
    time: "10/11/2023 - 20/11/2024",
    name: "Sally Quinn",
    cash: "1.195.000",
    price: "5.000.000",
    avatar: "/images/avatars/1.png",
    phone: "0909090900",
    date: "09/27/2018",
  },
  {
    id: "A61",
    time: "10/11/2023 - 20/11/2024",
    cash: "1.238.000",
    price: "5.000.000",
    status: "Cho thuê",
    name: "Margaret Bowers",
    avatar: "/images/avatars/2.png",
    date: "09/23/2016",
    phone: "0909090900",
  },
  {
    id: "A59",
    time: "10/11/2023 - 20/11/2024",
    name: "Minnie Roy",
    status: "Đang trống",
    cash: "1.189.000",
    price: "5.000.000",
    avatar: "/images/avatars/3.png",
    date: "10/15/2017",
    phone: "0909090900",
  },
  {
    id: "A30",
    time: "10/11/2023 - 20/11/2024",
    status: "Báo trả có cọc",
    cash: "1.192.000",
    price: "5.000.000",
    name: "Ralph Leonard",
    avatar: "",
    date: "06/12/2018",
    phone: "0909090900",
  },
  {
    id: "A66",
    status: "Đang cọc",
    deposit: "12/9",
    time: "10/11/2023 - 20/11/2024",
    cash: "1.130.000",
    price: "5.000.000",
    name: "Annie Martin",
    phone: "0909090900",
    avatar: "/images/avatars/1.png",
    date: "03/24/2018",
  },
  {
    id: "A33",
    time: "10/11/2023 - 20/11/2024",
    cash: "1.109.000",
    price: "5.000.000",
    name: "Adeline Day",
    status: "Cho thuê",
    avatar: "/images/avatars/1.png",
    date: "08/25/2017",
    phone: "0909090900",
  },
  {
    id: "A61",
    status: "Báo trả",
    time: "10/11/2023 - 20/11/2024",
    cash: "1.178.000",
    price: "5.000.000",
    name: "Lora Jackson",
    phone: "0909090900",
    avatar: "/images/avatars/1.png",
    date: "06/01/2017",
  },
  {
    id: "A22",
    time: "10/11/2023 - 20/11/2024",
    cash: "1.123.000",
    price: "5.000.000",
    name: "Rodney Sharp",
    status: "Cho thuê",
    phone: "0909090900",
    date: "12/03/2017",
    avatar: "/images/avatars/1.png",
  },
  {
    id: "A22",
    time: "10/11/2023 - 20/11/2024",
    cash: "1.123.000",
    price: "5.000.000",
    name: "Rodney Sharp",
    status: "Cho thuê",
    phone: "0909090900",
    date: "12/03/2017",
    avatar: "/images/avatars/1.png",
  },
  {
    id: "A22",
    time: "10/11/2023 - 20/11/2024",
    cash: "1.123.000",
    price: "5.000.000",
    name: "Rodney Sharp",
    status: "Cho thuê",
    phone: "0909090900",
    date: "12/03/2017",
    avatar: "/images/avatars/1.png",
  },
];

const statusObj: StatusObj = {
  "Đang cọc": { color: "info" },
  "Đang trống": { color: "error" },
  "Báo trả": { color: "primary" },
  "Báo trả có cọc": { color: "warning" },
  "Cho thuê": { color: "success" },
};

const data = {
  labels: ["Đang trống", "Đang cọc", "Cho thuê", "Báo trả", "Báo trả có cọc"],
  datasets: [
    {
      label: "Số phòng",
      data: [40, 20, 30, 10, 25],
      backgroundColor: [
        "rgba(255, 76, 81, 0.7)",
        "rgba(22, 177, 255, 0.7)",
        "rgba(86, 202, 0, 0.7)",
        "rgba(145, 85, 253, 0.7)",
        "rgba(255, 180, 0, 0.7)",
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
                  style={{ borderRight: "1px solid rgba(58, 53, 65, 0.12)" }}
                  className={styles.stickyColumn}
                >
                  {row.id}
                </TableCell>
                <TableCell>
                  {row.avatar ? (
                    <Badge>
                      <Avatar
                        alt="John Doe"
                        sx={{ width: 40, height: 40 }}
                        src={row.avatar}
                      />
                    </Badge>
                  ) : (
                    ""
                  )}
                </TableCell>
                <TableCell>{row.phone}</TableCell>
                <TableCell>
                  <Chip
                    label={`${row.status}${
                      row.deposit ? `: ${row.deposit}` : ""
                    }`}
                    color={statusObj[row.status].color}
                    sx={{
                      height: 24,
                      fontSize: "0.75rem",
                      textTransform: "capitalize",
                      "& .MuiChip-label": { fontWeight: 500 },
                    }}
                  />
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
