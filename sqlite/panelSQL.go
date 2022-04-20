// -*- coding: utf-8 -*-
// @Time    : 2022/4/7 16:45
// @Author  : Nuanxinqing
// @Email   : nuanxinqing@gmail.com
// @File    : panelSQL.go

package sqlite

import (
	"QLPanelTools/model"
	res "QLPanelTools/tools/response"
	"errors"
	"go.uber.org/zap"
	"gorm.io/gorm"
	"strings"
)

// InsertPanelData 创建新面板信息
func InsertPanelData(data *model.PanelData) (err error) {
	var dData model.QLPanel

	if data.Name == "" {
		dData.PanelName = "未命名"
	} else {
		dData.PanelName = data.Name
	}

	dData.URL = data.URL
	dData.ClientID = data.ID
	dData.ClientSecret = data.Secret
	err = DB.Create(&dData).Error
	if err != nil {
		zap.L().Error("Insert data error, err:", zap.Error(err))
		return
	}
	return
}

// UpdatePanelData 更新面板信息
func UpdatePanelData(data *model.UpPanelData) {
	var d model.QLPanel
	// 通过ID查询并更新数据
	DB.Where("id = ? ", data.UID).First(&d)
	d.PanelName = data.Name
	d.URL = data.URL
	d.ClientID = data.ID
	d.ClientSecret = data.Secret
	DB.Save(&d)
}

// DelPanelData 删除面板信息
func DelPanelData(data *model.DelPanelData) {
	var d model.QLPanel
	DB.Where("id = ? ", data.UID).First(&d)
	DB.Delete(&d)
}

// GetPanelAllData 获取面板All信息
func GetPanelAllData() []model.PanelAll {
	var p []model.PanelAll
	sqlStr := "SELECT `id`, `panel_name`, `url`, `client_id`, `client_secret`, `env_binding` FROM `ql_panels` where `deleted_at` IS NULL;"
	DB.Raw(sqlStr).Scan(&p)
	return p
}

// GetPanelData 通过第一个面板的配置信息
func GetPanelData() (res.ResCode, model.QLPanel) {
	var data model.QLPanel
	result := DB.First(&data)

	if errors.Is(result.Error, gorm.ErrRecordNotFound) {
		return res.CodeCheckDataNotExist, data
	}

	return res.CodeSuccess, data
}

// UpdatePanelEnvData 更新面板绑定变量
func UpdatePanelEnvData(data *model.PanelEnvData) {
	var d model.QLPanel
	// []String 转换 String 储存
	s := strings.Join(data.EnvBinding, "")
	// 通过ID查询并更新数据
	DB.Where("id = ? ", data.UID).First(&d)
	d.EnvBinding = s
	DB.Save(&d)
}

// GetPanelDataByID 根据ID值查询容器信息
func GetPanelDataByID(id int) model.QLPanel {
	var d model.QLPanel
	// 通过ID查询容器
	DB.Where("id = ? ", id).First(&d)
	return d
}