import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {
subList = ['656',
'657',
'658',
'659',
'660',
'661',
'662',
'663',
'664',
'665',
'666',
'667',
'668',
'669',
'670',
'671',
'672',
'673',
'674',
'675',
'676',
'677',
'678',
'679',
'680',
'681',
'682',
'683',
'684',
'685',
'686',
'687',
'688']

empyString: string = '';

  constructor() { }

  ngOnInit() {
    // for(let j=0;j<this.subList.length;j++){
    //          for(let i=0;i< 110;i++){
    //              console.log(i,this.subList[j])
    //            }
    //        }
    //       }

  //   for(let i= 0;i<= 4; i++){
  //     for(let j= 0;j< 4;j++){
  //       let val = (i === 0 || i == 4) ? '*' : j == 0 || j == 4 ? '*' : ' '  ;
  //       console.log(val);
  //     }
  //   }
  // }
  // for(let i=0;i>3;i++){
  //   let loga = (j)=>{
  //     console.log(j);
  //   }
  //   setTimeout({log,100})
  // }
  // for(let i=0;i<3;i++){
  //   let loga = ()=>{
  //     console.log(i);
  //   }
  //   setTimeout(loga,100);
  // }



    for(let sub in this.subList){
      console.log(`
      INSERT INTO prexmprod.asmnt_dtl_x_sub_qstn_formula ( ASSMNT_DTL_X_SUB_SID, SUB_UNIT, QST_TYPE_LKPCD, QST_LVL_LKPCD, QST_MIN_COUNT, QST_MAX_COUNT, OPRTNL_FLAG, CREATED_ON, UPDATED_ON) VALUES (${this.subList[sub]}, '1', '25', '201', '6', '6', 'A', now(),now());
      INSERT INTO prexmprod.asmnt_dtl_x_sub_qstn_formula ( ASSMNT_DTL_X_SUB_SID, SUB_UNIT, QST_TYPE_LKPCD, QST_LVL_LKPCD, QST_MIN_COUNT, QST_MAX_COUNT, OPRTNL_FLAG, CREATED_ON, UPDATED_ON) VALUES (${this.subList[sub]}, '2', '25', '201', '6', '6', 'A', now(),now());
      INSERT INTO prexmprod.asmnt_dtl_x_sub_qstn_formula ( ASSMNT_DTL_X_SUB_SID, SUB_UNIT, QST_TYPE_LKPCD, QST_LVL_LKPCD, QST_MIN_COUNT, QST_MAX_COUNT, OPRTNL_FLAG, CREATED_ON, UPDATED_ON) VALUES (${this.subList[sub]}, '3', '25', '201', '6', '6', 'A', now(),now());
      INSERT INTO prexmprod.asmnt_dtl_x_sub_qstn_formula ( ASSMNT_DTL_X_SUB_SID, SUB_UNIT, QST_TYPE_LKPCD, QST_LVL_LKPCD, QST_MIN_COUNT, QST_MAX_COUNT, OPRTNL_FLAG, CREATED_ON, UPDATED_ON) VALUES (${this.subList[sub]}, '4', '25', '201', '6', '6', 'A', now(),now());
      INSERT INTO prexmprod.asmnt_dtl_x_sub_qstn_formula ( ASSMNT_DTL_X_SUB_SID, SUB_UNIT, QST_TYPE_LKPCD, QST_LVL_LKPCD, QST_MIN_COUNT, QST_MAX_COUNT, OPRTNL_FLAG, CREATED_ON, UPDATED_ON) VALUES (${this.subList[sub]}, '5', '25', '201', '6', '6', 'A', now(),now());
      INSERT INTO prexmprod.asmnt_dtl_x_sub_qstn_formula ( ASSMNT_DTL_X_SUB_SID, SUB_UNIT, QST_TYPE_LKPCD, QST_LVL_LKPCD, QST_MIN_COUNT, QST_MAX_COUNT, OPRTNL_FLAG, CREATED_ON, UPDATED_ON) VALUES (${this.subList[sub]}, '1', '25', '203', '3', '3', 'A', now(),now());
      INSERT INTO prexmprod.asmnt_dtl_x_sub_qstn_formula ( ASSMNT_DTL_X_SUB_SID, SUB_UNIT, QST_TYPE_LKPCD, QST_LVL_LKPCD, QST_MIN_COUNT, QST_MAX_COUNT, OPRTNL_FLAG, CREATED_ON, UPDATED_ON) VALUES (${this.subList[sub]}, '2', '25', '203', '3', '3', 'A', now(),now());
      INSERT INTO prexmprod.asmnt_dtl_x_sub_qstn_formula ( ASSMNT_DTL_X_SUB_SID, SUB_UNIT, QST_TYPE_LKPCD, QST_LVL_LKPCD, QST_MIN_COUNT, QST_MAX_COUNT, OPRTNL_FLAG, CREATED_ON, UPDATED_ON) VALUES (${this.subList[sub]}, '3', '25', '203', '3', '3', 'A', now(),now());
      INSERT INTO prexmprod.asmnt_dtl_x_sub_qstn_formula ( ASSMNT_DTL_X_SUB_SID, SUB_UNIT, QST_TYPE_LKPCD, QST_LVL_LKPCD, QST_MIN_COUNT, QST_MAX_COUNT, OPRTNL_FLAG, CREATED_ON, UPDATED_ON) VALUES (${this.subList[sub]}, '4', '25', '203', '3', '3', 'A', now(),now());
      INSERT INTO prexmprod.asmnt_dtl_x_sub_qstn_formula ( ASSMNT_DTL_X_SUB_SID, SUB_UNIT, QST_TYPE_LKPCD, QST_LVL_LKPCD, QST_MIN_COUNT, QST_MAX_COUNT, OPRTNL_FLAG, CREATED_ON, UPDATED_ON) VALUES (${this.subList[sub]}, '5', '25', '203', '3', '3', 'A', now(),now());`)
    }
  }

}
