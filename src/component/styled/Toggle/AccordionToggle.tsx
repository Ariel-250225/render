// import { css, useTheme } from "@emotion/react";
// import Accordion from "@mui/material/Accordion";
// import { AccordionSummary } from "@mui/material";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import { EllipsisCase } from "../../layouts/Layouts";
//
// export function AccordionToggle() {
//   const theme = useTheme();
//   return (
//     <Accordion
//       css={css`
//         width: 100%;
//         background-color: ${theme.mode.cardBackground};
//         color: ${theme.mode.textPrimary};
//         svg {
//           fill: ${theme.mode.textPrimary};
//         }
//       `}
//     >
//       <AccordionSummary
//         expandIcon={<ExpandMoreIcon />}
//         aria-controls="panel1-content"
//       >
//         <span
//           css={css`
//             width: 80px;
//           `}
//         >
//           {item.type === "GLOBAL" ? "해외" : "국내"}
//         </span>
//         <EllipsisCase
//           testAlign="left"
//           width={50}
//           css={css`
//             align-items: flex-start;
//           `}
//         />
//       </AccordionSummary>
//       <AccordionDetails>
//         <Typography>
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
//           malesuada lacus ex, sit amet blandit leo lobortis eget.
//         </Typography>
//       </AccordionDetails>
//     </Accordion>
//   );
// }
