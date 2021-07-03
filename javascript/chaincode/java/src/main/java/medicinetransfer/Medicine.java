package medicinetransfer;

import com.owlike.genson.annotation.JsonProperty;
import org.hyperledger.fabric.contract.annotation.DataType;
import org.hyperledger.fabric.contract.annotation.Property;
import java.util.Objects;


@DataType()
public final class Medicine {
	@Property()
	private final String id;

	@Property()
	private final String productId;

	@Property()
	private final String name;

	@Property()
	private final String owner;

	@Property()
	private final String value;

	@Property()
	private final String numberOf;

	@Property()
	private final String expirationDate;

	@Property()
	private final String manufacturedDate;

	@Property()
	private final String status;

	@Property()
	private final String issueDate;

	@Property()
	private final String supplier;

	@Property()
	private final String demander;

	public String getId() {
		return id;
	}

	public String getProductId() {
		return productId;
	}

	public String getName() {
		return name;
	}

	public String getOwner() {
		return owner;
	}

	public String getValue() {
		return value;
	}

	public String getNumberOf() {
		return numberOf;
	}

	public String getManufacturedDate() {
		return manufacturedDate;
	}

	public String getExpirationDate() {
		return expirationDate;
	}

	public String getStatus() {
		return status;
	}

	public String getIssueDate() {
		return issueDate;
	}

	public String getSupplier() {
		return supplier;
	}

	public String getDemander() {
		return demander;
	}

	
	
	public Medicine(@JsonProperty("id") final String id, @JsonProperty("productId") final String productId,
			@JsonProperty("name") final String name, @JsonProperty("owner") final String owner,
			@JsonProperty("value") final String value, @JsonProperty("numberOf") final String numberOf,
			@JsonProperty("expirationDate") final String expirationDate,
			@JsonProperty("manufacturedDate") final String manufacturedDate,
			@JsonProperty("status") final String status, @JsonProperty("issueDate") final String issueDate,
			@JsonProperty("supplier") final String supplier, @JsonProperty("demander") final String demander) {
		this.id = id;
		this.productId = productId;
		this.name = name;
		this.owner = owner;
		this.value = value;
		this.numberOf = numberOf;
		this.expirationDate = expirationDate;
		this.manufacturedDate = manufacturedDate;
		this.status = status;
		this.issueDate = issueDate;
		this.supplier = supplier;
		this.demander = demander;
	}
	
	@Override
	public boolean equals(final Object obj) {
		if (this == obj) {
			return true;
		}

		if ((obj == null) || (getClass() != obj.getClass())) {
			return false;
		}

		Medicine other = (Medicine) obj;

		return Objects.deepEquals(
				new String[] { getId(), getProductId(), getName(), getOwner(), getValue(), getNumberOf(),
						getExpirationDate(), getManufacturedDate(), getStatus(), getIssueDate(), getSupplier(),
						getDemander() },
				new String[] { other.getId(), other.getProductId(), other.getName(), other.getOwner(), other.getValue(),
						other.getNumberOf(), other.getExpirationDate(), other.getManufacturedDate(), other.getStatus(),
						other.getIssueDate(), other.getSupplier(), other.getDemander() });
	}
	
	@Override
	public int hashCode() {
		return Objects.hash(getId(), getProductId(), getName(), getOwner(), getValue(), getNumberOf(),
				getExpirationDate(), getManufacturedDate(), getStatus(), getIssueDate(), getSupplier(), getDemander());
	}

	@Override
	public String toString() {
		return this.getClass().getSimpleName() + "@" + Integer.toHexString(hashCode()) + " [id=" + id + ", "
				+ "productId=" + productId + ", name=" + name + ", owner=" + owner + ", value=" + value + " , numberOf="
				+ numberOf + " " + ", expirationDate=" + expirationDate + ", manufacturedDate=" + manufacturedDate
				+ ", status=" + status + ",issueDate=" + issueDate + ", supplier=" + supplier + ", demander=" + demander
				+ "]";
	}
}
