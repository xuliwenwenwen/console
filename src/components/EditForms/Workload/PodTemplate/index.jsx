/*
 * This file is part of KubeSphere Console.
 * Copyright (C) 2019 The KubeSphere Console Authors.
 *
 * KubeSphere Console is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * KubeSphere Console is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with KubeSphere Console.  If not, see <https://www.gnu.org/licenses/>.
 */

import React from 'react'
import { get } from 'lodash'

import { Form } from '@kube-design/components'
import Base from 'components/Forms/Workload/ContainerSettings'

export default class PodTemplate extends Base {
  handleContainer = data => {
    const { formProps } = this.props
    Base.prototype.handleContainer.call(this, data)

    formProps.onChange()
  }

  render() {
    const { isFederated, formTemplate, formRef, formProps } = this.props
    const { showContainer, selectContainer } = this.state
    const data = isFederated ? get(formTemplate, 'spec.template') : formTemplate

    if (showContainer) {
      return this.renderContainerForm(selectContainer)
    }

    return (
      <Form data={data} ref={formRef} {...formProps}>
        {this.renderContainerList()}
      </Form>
    )
  }
}
