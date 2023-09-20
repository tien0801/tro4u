// ** MUI Imports
import Box from "@mui/material/Box";

// Icons
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import GridViewIcon from "@mui/icons-material/GridView";
import AddHomeOutlinedIcon from "@mui/icons-material/AddHomeOutlined";
import AddHomeWorkIcon from "@mui/icons-material/AddHomeWork";

import { Button, Grid, Link, Paper, Stack, Typography } from "@mui/material";
import styles from "./topInfo.module.scss";

const TopInfo = () => {
  return (
    <Box className={styles.sectionInfo}>
      <Grid
        container
        alignItems="center"
        spacing={2}
        className={styles.topTable}
      >
        <Grid item xs={12} sm={6} className={styles.boxLeft}>
          <Link
            href="#"
            style={{
              fontSize: "1.2rem",
              display: "flex",
              alignItems: "center",
              fontWeight: 500,
            }}
          >
            Nhà: Quang Trung <ExpandMoreIcon />
          </Link>
          <Typography>
            315/272/26 Phạm Văn Chiêu, Phường 9, Gò vấp...
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} className={styles.boxRight}>
          <Stack spacing={2} direction="row" className={styles.listButton}>
            <Button variant="outlined" startIcon={<GridViewIcon />}>
              Hiển thị
            </Button>
            <Button variant="contained" startIcon={<AddHomeWorkIcon />}>
              Thêm nhà
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default TopInfo;
