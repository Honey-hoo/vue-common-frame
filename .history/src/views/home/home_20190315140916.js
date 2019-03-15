export default {
	name: 'home',
	data() {
		return {
			settingOpt: {
				panelVisible: false,
				// 是否显示‘表格设置’
				tableSetVisible: true,
				// 所有列字段
				allTitles: [
					{
						prop: 'patientName',
						label: '姓名',
						disabled: false,
						sortable: true,
						width: '',
						fixed: false
					},
					{
						prop: 'gender',
						label: '性别',
						disabled: false,
						sortable: true,
						width: '100',
						fixed: false
					},
					{
						prop: 'age',
						label: '年龄',
						disabled: false,
						sortable: true,
						width: '100',
						fixed: false
					},
					{
						prop: 'birthDay',
						label: '生日',
						disabled: false,
						sortable: true,
						width: '100',
						fixed: false
					},
					{
						prop: 'idCardNo',
						label: '身份证',
						disabled: false,
						sortable: true,
						width: '120',
						fixed: false
					},
					{
						prop: 'serviceSectID',
						label: '类型',
						disabled: false,
						sortable: true,
						width: '100',
						fixed: false
					},
					{
						prop: 'examItem',
						label: '检查项目',
						disabled: false,
						sortable: true,
						width: '100',
						fixed: false
					},
					{
						prop: 'checkArea',
						label: '检查部位',
						disabled: false,
						sortable: true,
						width: '100',
						fixed: false
					},
					{
						prop: 'medRecNO',
						label: '病历号',
						disabled: false,
						sortable: true,
						width: '100',
						fixed: false
					},
					{
						prop: 'patientClass',
						label: '就诊类型',
						disabled: false,
						sortable: true,
						width: '100',
						fixed: false
					},
					{
						prop: 'visitID',
						label: '就诊号',
						disabled: false,
						sortable: true,
						width: '100',
						fixed: false
					},
					{
						prop: 'alternateVisitID',
						label: '住院号',
						disabled: false,
						sortable: true,
						width: '100',
						fixed: false
					},
					{
						prop: 'outPatientID',
						label: '门诊号',
						disabled: false,
						sortable: true,
						width: '100',
						fixed: false
					},
					{
						prop: 'pointOfCare',
						label: '病区',
						disabled: false,
						sortable: true,
						width: '100',
						fixed: false
					},
					{
						prop: 'bed',
						label: '床号',
						disabled: false,
						sortable: true,
						width: '100',
						fixed: false
					},
					{
						prop: 'organizationName',
						label: '检查机构',
						disabled: false,
						sortable: true,
						width: '100',
						fixed: false
					},
					{
						prop: 'requestOrgName',
						label: '申请机构',
						disabled: false,
						sortable: true,
						width: '100',
						fixed: false
					},
					{
						prop: 'requestDept',
						label: '申请科室',
						disabled: false,
						sortable: true,
						width: '100',
						fixed: false
					},
					{
						prop: 'requestDocName',
						label: '申请医生',
						disabled: false,
						sortable: true,
						width: '100',
						fixed: false
					},
					{
						prop: 'requestTime',
						label: '申请时间',
						disabled: false,
						sortable: true,
						width: '100',
						fixed: false
					},
					{
						prop: 'regTime',
						label: '登记时间',
						disabled: false,
						sortable: true,
						width: '100',
						fixed: false
					},
					{
						prop: 'examTime',
						label: '检查时间',
						disabled: false,
						sortable: true,
						width: '100',
						fixed: false
					},
					{
						prop: 'patientID',
						label: '患者编号',
						disabled: false,
						sortable: true,
						width: '100',
						fixed: false
					},
					{
						prop: 'accessionNumber',
						label: '检查号',
						disabled: false,
						sortable: true,
						width: '100',
						fixed: false
					},
					{
						prop: 'abnormalFlags',
						label: '阴阳性',
						disabled: false,
						sortable: true,
						width: '100',
						fixed: false
					},
					{
						prop: 'criticalValue',
						label: '危急报告',
						disabled: false,
						sortable: true,
						width: '100',
						fixed: false
					},
					{
						prop: 'ifHasImage',
						label: '影像状态',
						disabled: false,
						sortable: true,
						width: '',
						fixed: false
					},
					{
						prop: 'resultStatus',
						label: '报告状态',
						disabled: false,
						sortable: true,
						width: '',
						fixed: false
					}
				],
				// 当前配置的列字段 （与当前显示字段相同）
				tableTitles: [
					{
						prop: 'patientName',
						label: '姓名',
						disabled: false,
						sortable: true,
						width: '',
						fixed: false
					},
					{
						prop: 'gender',
						label: '性别',
						disabled: false,
						sortable: true,
						width: '100',
						fixed: false
					},
					{
						prop: 'age',
						label: '年龄',
						disabled: false,
						sortable: true,
						width: '100',
						fixed: false
					},
					{
						prop: 'birthDay',
						label: '生日',
						disabled: false,
						sortable: true,
						width: '100',
						fixed: false
					},
					{
						prop: 'idCardNo',
						label: '身份证',
						disabled: false,
						sortable: true,
						width: '120',
						fixed: false
					},
					{
						prop: 'serviceSectID',
						label: '类型',
						disabled: false,
						sortable: true,
						width: '100',
						fixed: false
					},
					{
						prop: 'examItem',
						label: '检查项目',
						disabled: false,
						sortable: true,
						width: '100',
						fixed: false
					},
					{
						prop: 'checkArea',
						label: '检查部位',
						disabled: false,
						sortable: true,
						width: '100',
						fixed: false
					},
					{
						prop: 'medRecNO',
						label: '病历号',
						disabled: false,
						sortable: true,
						width: '100',
						fixed: false
					},
					{
						prop: 'patientClass',
						label: '就诊类型',
						disabled: false,
						sortable: true,
						width: '100',
						fixed: false
					},
					{
						prop: 'visitID',
						label: '就诊号',
						disabled: false,
						sortable: true,
						width: '100',
						fixed: false
					},
					{
						prop: 'alternateVisitID',
						label: '住院号',
						disabled: false,
						sortable: true,
						width: '100',
						fixed: false
					},
					{
						prop: 'outPatientID',
						label: '门诊号',
						disabled: false,
						sortable: true,
						width: '100',
						fixed: false
					},
					{
						prop: 'pointOfCare',
						label: '病区',
						disabled: false,
						sortable: true,
						width: '100',
						fixed: false
					},
					{
						prop: 'bed',
						label: '床号',
						disabled: false,
						sortable: true,
						width: '100',
						fixed: false
					},
					{
						prop: 'organizationName',
						label: '检查机构',
						disabled: false,
						sortable: true,
						width: '100',
						fixed: false
					}
				],
				// 当前显示字段
				showTitles: [
					{
						prop: 'patientName',
						label: '姓名',
						disabled: false,
						sortable: true,
						width: '',
						fixed: false
					},
					{
						prop: 'gender',
						label: '性别',
						disabled: false,
						sortable: true,
						width: '100',
						fixed: false
					},
					{
						prop: 'age',
						label: '年龄',
						disabled: false,
						sortable: true,
						width: '100',
						fixed: false
					},
					{
						prop: 'birthDay',
						label: '生日',
						disabled: false,
						sortable: true,
						width: '100',
						fixed: false
					},
					{
						prop: 'idCardNo',
						label: '身份证',
						disabled: false,
						sortable: true,
						width: '120',
						fixed: false
					},
					{
						prop: 'serviceSectID',
						label: '类型',
						disabled: false,
						sortable: true,
						width: '100',
						fixed: false
					},
					{
						prop: 'examItem',
						label: '检查项目',
						disabled: false,
						sortable: true,
						width: '100',
						fixed: false
					},
					{
						prop: 'checkArea',
						label: '检查部位',
						disabled: false,
						sortable: true,
						width: '100',
						fixed: false
					},
					{
						prop: 'medRecNO',
						label: '病历号',
						disabled: false,
						sortable: true,
						width: '100',
						fixed: false
					},
					{
						prop: 'patientClass',
						label: '就诊类型',
						disabled: false,
						sortable: true,
						width: '100',
						fixed: false
					},
					{
						prop: 'visitID',
						label: '就诊号',
						disabled: false,
						sortable: true,
						width: '100',
						fixed: false
					},
					{
						prop: 'alternateVisitID',
						label: '住院号',
						disabled: false,
						sortable: true,
						width: '100',
						fixed: false
					},
					{
						prop: 'outPatientID',
						label: '门诊号',
						disabled: false,
						sortable: true,
						width: '100',
						fixed: false
					},
					{
						prop: 'pointOfCare',
						label: '病区',
						disabled: false,
						sortable: true,
						width: '100',
						fixed: false
					},
					{
						prop: 'bed',
						label: '床号',
						disabled: false,
						sortable: true,
						width: '100',
						fixed: false
					},
					{
						prop: 'organizationName',
						label: '检查机构',
						disabled: false,
						sortable: true,
						width: '100',
						fixed: false
					}
				],
				// 表格数据
				tableData: [
					{
						abnormalFlags: '阴性',
						accessionNumber: '299',
						age: 31,
						ageUnit: '岁',
						alternateVisitID: null,
						attention: null,
						auditDate: '2018/11/20 15:53:00',
						bed: null,
						birthDay: '1987/1/1',
						checkArea: '胸部拍片',
						clinicDiagnosis: '体检放射检查',
						consultEndDate: '',
						consultRequestDate: '',
						consultationStatus: 0,
						contactPhoneNO: '15224059299',
						criticalValue: '否',
						examCode: '30100',
						examEndDate: '2018/11/20 9:20:32',
						examItem: '胸部拍片',
						examStatus: '审核完成',
						examTime: '2018/11/20 9:20:32',
						examUID: 'fd8245ca-2cb9-4625-10013-a99f00dcb320',
						gender: '女',
						id: '00000000-0000-0000-0000-000000000000',
						idCardNo: '111122198702261111',
						ifHasImage: true,
						medRecNO: '201811160036',
						organizationName: '某某医院',
						otherClinicalInfo: null,
						outPatientID: null,
						patientClass: '体检',
						patientID: '201811160036',
						patientMasterID: '1d81a4cd-c6b3-401b-97a5-a99f00ddadbb',
						patientName: '小红',
						placerOrderNO: 'TJS62201811160036',
						pointOfCare: null,
						pointOfCareID: null,
						reason: null,
						regTime: '2018/11/20 9:20:32',
						requestDept: '体检',
						requestDocName: '管理员',
						requestOrgName: '某某医院',
						requestTime: '2018/11/20 9:20:32',
						resultDate: '2018/11/20 15:53:00',
						resultReviseName: null,
						resultStatus: '审核完成',
						reviseDate: '',
						serviceSectID: 'DR',
						studyInstanceUID: '1.2.86.76547135.7.317.20181120092032',
						symptom: null,
						visitID: '9c3c1411-6860-4bad-9f65-681c62ceb3ad'
					},
					{
						abnormalFlags: '阴性',
						accessionNumber: '299',
						age: 31,
						ageUnit: '岁',
						alternateVisitID: null,
						attention: null,
						auditDate: '2018/11/20 15:53:00',
						bed: null,
						birthDay: '1987/1/1',
						checkArea: '胸部拍片',
						clinicDiagnosis: '体检放射检查',
						consultEndDate: '',
						consultRequestDate: '',
						consultationStatus: 0,
						contactPhoneNO: '15224059299',
						criticalValue: '否',
						examCode: '30100',
						examEndDate: '2018/11/20 9:20:32',
						examItem: '胸部拍片',
						examStatus: '审核完成',
						examTime: '2018/11/20 9:20:32',
						examUID: 'fd8245ca-2cb9-4625-10013-a99f00dcb320',
						gender: '女',
						id: '00000000-0000-0000-0000-000000000000',
						idCardNo: '2222221987022612225',
						ifHasImage: true,
						medRecNO: '201811160036',
						organizationName: '某某医院',
						otherClinicalInfo: null,
						outPatientID: null,
						patientClass: '体检',
						patientID: '201811160036',
						patientMasterID: '1d81a4cd-c6b3-401b-97a5-a99f00ddadbb',
						patientName: '张三',
						placerOrderNO: 'TJS62201811160036',
						pointOfCare: null,
						pointOfCareID: null,
						reason: null,
						regTime: '2018/11/20 9:20:32',
						requestDept: '体检',
						requestDocName: '管理员',
						requestOrgName: '某某医院',
						requestTime: '2018/11/20 9:20:32',
						resultDate: '2018/11/20 15:53:00',
						resultReviseName: null,
						resultStatus: '审核完成',
						reviseDate: '',
						serviceSectID: 'DR',
						studyInstanceUID: '1.2.86.76547135.7.317.20181120092032',
						symptom: null,
						visitID: '9c3c1411-6860-4bad-9f65-681c62ceb3ad'
					}
				],
				// 当前配置的表格设置 (同当前显示表格设置)
				tableSet: {
					border: true,
					index: true,
					stripe: true,
					select: true,
					height: '500',
					tooltipEffect: 'dark',
					align: 'left'
				},
				// 当前显示的表格设置
				showTableSet: {
					border: true,
					index: true,
					stripe: true,
					select: true,
					height: '500',
					tooltipEffect: 'dark',
					align: 'left'
				}
			}
		};
	},
	methods: {
		// 更新列表数据 可用于新的设置提交
		updateTable(arg) {
			this.hiddenPanel();
			this.settingOpt.showTitles = arg;
		},
		// 关闭列表设置
		hiddenPanel(bool) {
			this.settingOpt.panelVisible = bool;
		},
		setTable(val) {
			this.settingOpt.showTableSet = val;
		},
		select(selection, row) {
			console.log('单选', selection, row);
		},
		selectAll(selection) {
			console.log('全选', selection);
		},
		selectionChange(selection) {
			console.log('选择变化触发', selection);
		},
		cellMouseEnter(row, column, cell, event) {
			// console.log('鼠标移进单元格',row, column, cell, event)
		},
		cellMouseLeave(row, column, cell, event) {
			// console.log('鼠标移出单元格',row, column, cell, event)
		},
		cellClick(row, column, cell, event) {
			// console.log("单击单元格", row, column, cell, event);
		},
		cellDbclick(row, column, cell, event) {
			// console.log("双击单元格", row, column, cell, event);
		},
		rowClick(row, column, event) {
			console.log('单击行', row, column, event);
		},
		rowContextmenu(row, column, event) {
			event.preventDefault();
			console.log('右键单击行', row, column, event);
		},
		rowDblclick(row, column, event) {
			console.log('双击行', row, column, event);
		},
		headerClick(column, event) {
			console.log('点击头部', column, event);
		},
		headerContextMenu(column, event) {
			console.log('右键表头');
			event.preventDefault();
			this.hiddenPanel(true);
		},
		sortChange(obj) {
			console.log('排序', obj);
		},
		currentChange(rows) {
			console.log('单选', rows);
		},
		headerDragend(newWidth, oldWidth, column, event) {
			console.log('推拽改变列宽', newWidth, oldWidth, column, event);
		}
	}
};
